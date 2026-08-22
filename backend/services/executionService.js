const vm = require('vm');
const axios = require('axios');

/**
 * Execution Service for CodeMentor AI
 * Supports:
 * 1. Safe VM Sandbox execution (JavaScript - isolated VM context with 1000ms timeout)
 * 2. Judge0 API Integration (Multi-language sandbox when JUDGE0_API_KEY is configured)
 */
class ExecutionService {
  /**
   * Execute code against test cases
   * @param {Object} params
   * @param {string} params.language
   * @param {string} params.code
   * @param {string} params.functionName
   * @param {Array} params.testCases
   */
  async executeCode({ language = 'javascript', code, functionName, testCases = [] }) {
    const executionMode = process.env.CODE_EXECUTION_MODE || 'sandbox';

    // If Judge0 is configured and mode is judge0, attempt Judge0 execution
    if (executionMode === 'judge0' && process.env.JUDGE0_API_KEY && process.env.JUDGE0_API_URL) {
      try {
        return await this.executeWithJudge0({ language, code, functionName, testCases });
      } catch (err) {
        console.warn('⚠️ Judge0 execution failed. Falling back to safe local VM sandbox:', err.message);
        return this.executeInVMSandbox({ code, functionName, testCases });
      }
    }

    // Default: Safe Local VM Sandbox execution
    return this.executeInVMSandbox({ code, functionName, testCases });
  }

  /**
   * Safe JavaScript Execution in Node.js isolated VM Context
   */
  executeInVMSandbox({ code, functionName, testCases }) {
    const results = [];
    let passedCount = 0;

    for (let i = 0; i < testCases.length; i++) {
      const tc = testCases[i];
      const startTime = process.hrtime();

      try {
        // Build clean VM sandbox context
        const sandbox = {
          console: { log: () => {}, error: () => {}, warn: () => {} },
          Math: Math,
          Array: Array,
          Object: Object,
          String: String,
          Number: Number,
          Boolean: Boolean,
          JSON: JSON,
          Set: Set,
          Map: Map,
        };

        const context = vm.createContext(sandbox);

        // Run user's code definition inside VM context
        const script = new vm.Script(code);
        script.runInContext(context, { timeout: 1000 });

        if (typeof context[functionName] !== 'function') {
          throw new Error(`Function "${functionName}" is not defined in user code.`);
        }

        const fnParamCount = context[functionName].length;
        let rawInput = tc.input.trim();
        let args;

        // Parse arguments array intelligently
        if (rawInput.startsWith('[') && rawInput.endsWith(']')) {
          try {
            const directScript = new vm.Script(rawInput);
            const directVal = directScript.runInContext(context, { timeout: 1000 });

            if (Array.isArray(directVal) && fnParamCount > 1 && directVal.length === fnParamCount) {
              args = directVal;
            } else if (fnParamCount === 1) {
              args = [directVal];
            } else {
              const wrapScript = new vm.Script(`[${rawInput}]`);
              const wrapVal = wrapScript.runInContext(context, { timeout: 1000 });
              if (Array.isArray(wrapVal[0]) && wrapVal[0].length === fnParamCount) {
                args = wrapVal[0];
              } else {
                args = directVal;
              }
            }
          } catch (e) {
            const wrapScript = new vm.Script(`[${rawInput}]`);
            args = wrapScript.runInContext(context, { timeout: 1000 });
          }
        } else {
          const wrapScript = new vm.Script(`[${rawInput}]`);
          args = wrapScript.runInContext(context, { timeout: 1000 });
        }

        if (!Array.isArray(args)) {
          args = [args];
        }

        // Call the user's function inside context
        const actualResult = context[functionName](...args);
        const actualStr = JSON.stringify(actualResult);
        const expectedStr = tc.expected;

        // Compare actual vs expected
        const passed = this.compareOutputs(actualStr, expectedStr);

        const endTime = process.hrtime(startTime);
        const executionTimeMs = (endTime[0] * 1000 + endTime[1] / 1e6).toFixed(2);

        if (passed) passedCount++;

        results.push({
          testCase: i + 1,
          name: tc.type ? `${tc.type.toUpperCase()} Case` : `Test Case ${i + 1}`,
          input: tc.input,
          expected: expectedStr,
          actual: actualStr === undefined ? 'undefined' : actualStr,
          passed,
          executionTime: `${executionTimeMs}ms`,
        });

      } catch (err) {
        const endTime = process.hrtime(startTime);
        const executionTimeMs = (endTime[0] * 1000 + endTime[1] / 1e6).toFixed(2);

        results.push({
          testCase: i + 1,
          name: tc.type ? `${tc.type.toUpperCase()} Case` : `Test Case ${i + 1}`,
          input: tc.input,
          expected: tc.expected,
          actual: `Error: ${err.message}`,
          passed: false,
          executionTime: `${executionTimeMs}ms`,
          error: err.message,
        });
      }
    }

    return {
      success: true,
      executionMode: 'sandbox',
      passed: passedCount,
      total: testCases.length,
      results,
    };
  }

  /**
   * Judge0 API Execution integration for multi-language execution
   */
  async executeWithJudge0({ language, code, functionName, testCases }) {
    const languageIds = {
      javascript: 63,
      python: 71,
      java: 62,
      cpp: 54,
    };

    const languageId = languageIds[language.toLowerCase()] || 63;
    const url = `${process.env.JUDGE0_API_URL.replace(/\/$/, '')}/submissions?wait=true`;

    const results = [];
    let passedCount = 0;

    for (let i = 0; i < testCases.length; i++) {
      const tc = testCases[i];
      const runnerCode = `
${code}

console.log(JSON.stringify(${functionName}(...[${tc.input}])));
`;

      const response = await axios.post(
        url,
        {
          source_code: runnerCode,
          language_id: languageId,
        },
        {
          headers: {
            'X-RapidAPI-Key': process.env.JUDGE0_API_KEY,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      );

      const stdout = (response.data.stdout || '').trim();
      const stderr = (response.data.stderr || response.data.compile_output || '').trim();

      const passed = this.compareOutputs(stdout, tc.expected);
      if (passed) passedCount++;

      results.push({
        testCase: i + 1,
        name: `Test Case ${i + 1}`,
        input: tc.input,
        expected: tc.expected,
        actual: stderr ? `Error: ${stderr}` : stdout,
        passed,
        executionTime: `${response.data.time || 0}s`,
      });
    }

    return {
      success: true,
      executionMode: 'judge0',
      passed: passedCount,
      total: testCases.length,
      results,
    };
  }

  /**
   * Robust output comparator (handles spaces, quotes, JSON arrays, booleans)
   */
  compareOutputs(actual, expected) {
    if (actual === expected) return true;

    try {
      const normActual = JSON.stringify(JSON.parse(actual));
      const normExpected = JSON.stringify(JSON.parse(expected));
      return normActual === normExpected;
    } catch (e) {
      return (actual || '').trim() === (expected || '').trim();
    }
  }
}

module.exports = new ExecutionService();
