const { GoogleGenerativeAI } = require('@google/generative-ai');

/**
 * Service to interact with Google Gemini API and analyze code submissions.
 */
class GeminiService {
  constructor() {
    this.apiKey = process.env.GEMINI_API_KEY;
    if (!this.apiKey) {
      console.warn('⚠️ WARNING: GEMINI_API_KEY environment variable is not set!');
    } else {
      this.genAI = new GoogleGenerativeAI(this.apiKey);
    }
  }

  /**
   * Analyze submitted code, problem description, and optional failed test cases
   * @param {Object} params
   * @param {string} params.language
   * @param {string} params.problem
   * @param {string} params.code
   * @param {Object} [params.previousAnalysis]
   * @param {Array} [params.failedTestCases]
   */
  async analyzeCode({ language, problem, code, previousAnalysis, failedTestCases }) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is missing on the server. Please check your .env configuration.');
    }

    if (!this.genAI) {
      this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    }

    const systemInstruction = `
You are CodeMentor AI, an expert computer science mentor helping students debug LeetCode-style algorithms.
Your goal is to act as a Socratic mentor: guide the user through clear root-cause explanations, progressive hints, test case generation, and complexity analysis.

CRITICAL CONDITIONAL RULES:

1. CODE IS INCORRECT (bugFound = true):
   - Set summary to "Potential Issue Detected".
   - Explain clearly what part of the logic has a bug (e.g. "Your loop starts from index i instead of i + 1...").
   - Provide 3 progressive hints in the "hints" array (Hint 1: High level pointer; Hint 2: Logic flaw location; Hint 3: Structural fix suggestion).
   - Provide a full explanation and a suggested fix snippet in "suggestedFix".

2. CODE IS CORRECT (bugFound = false):
   - Set summary to "No Issues Detected".
   - Set bugExplanation to "Your implementation appears logically correct. You can now run the test cases."
   - Set hints to [] (EMPTY ARRAY). Do NOT provide hints for a correct solution.
   - Set suggestedFix to "" (EMPTY STRING).
   - Provide time and space complexity in "complexity".

3. IF FAILED TEST CASES ARE PROVIDED:
   - Set bugFound to true.
   - Set summary to "Failed Test Case Analysis".
   - Analyze specifically why the user's actual output differed from the expected output.

Return ONLY a valid JSON object matching the requested schema. No markdown text outside the JSON.

JSON SCHEMA:
{
  "summary": "Potential Issue Detected OR No Issues Detected",
  "bugFound": true or false,
  "bugExplanation": "Explanation of issue OR 'Your implementation appears logically correct. You can now run the test cases.'",
  "hints": ["Hint 1", "Hint 2", "Hint 3"] OR [],
  "fullExplanation": "Walkthrough if bugFound is true, else empty string",
  "suggestedFix": "Code fix snippet if bugFound is true, else empty string",
  "testCases": [],
  "complexity": {
    "time": "O(...) explanation",
    "space": "O(...) explanation"
  },
  "fixStatus": "Original issue appears to be resolved."
}
`;

    let prompt = `
${systemInstruction}

[PROBLEM STATEMENT & CONSTRAINTS]
Language: ${language}
Problem Description:
${problem}

[SUBMITTED CODE]
\`\`\`${language}
${code}
\`\`\`
`;

    if (failedTestCases && failedTestCases.length > 0) {
      prompt += `
[ACTUAL TEST RUN FAILURE FEEDBACK]
The user ran test cases on their solution and the following test case(s) FAILED:
${failedTestCases.map((ft, idx) => `
Failed Test #${idx + 1}:
Input: ${ft.input}
Expected Output: ${ft.expected}
Actual Output Received: ${ft.actual}
`).join('\n')}

Please analyze why the user's code produced "${failedTestCases[0].actual}" instead of "${failedTestCases[0].expected}", and provide targeted mentor guidance.
`;
    }

    if (previousAnalysis) {
      prompt += `
[PREVIOUS ANALYSIS CONTEXT]
Previous Summary: ${previousAnalysis.summary || 'N/A'}
Previous Bug Explanation: ${previousAnalysis.bugExplanation || 'N/A'}
`;
    }

    const modelCandidates = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-2.0-flash-exp'];
    let lastError = null;

    for (const modelName of modelCandidates) {
      try {
        console.log(`Analyzing code using Gemini model: ${modelName}...`);
        const model = this.genAI.getGenerativeModel({
          model: modelName,
          generationConfig: {
            responseMimeType: 'application/json',
            temperature: 0.1,
          },
        });

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        return this.parseAndValidateJSON(responseText, language, code);
      } catch (err) {
        console.warn(`Model ${modelName} failed:`, err.message);
        lastError = err;
      }
    }

    throw new Error(lastError?.message || 'Failed to analyze code with Gemini AI.');
  }

  /**
   * Safely parses JSON string and ensures required schema fields exist.
   */
  parseAndValidateJSON(rawText, language, code) {
    let cleanText = rawText.trim();
    if (cleanText.startsWith('```json')) {
      cleanText = cleanText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (cleanText.startsWith('```')) {
      cleanText = cleanText.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    let json;
    try {
      json = JSON.parse(cleanText);
    } catch (e) {
      console.warn('Malformed JSON returned by AI. Extracting via regex pattern...');
      const match = cleanText.match(/\{[\s\S]*\}/);
      if (match) {
        json = JSON.parse(match[0]);
      } else {
        throw new Error('AI response could not be parsed as valid JSON.');
      }
    }

    const isBugFound = typeof json.bugFound === 'boolean' ? json.bugFound : true;

    return {
      summary: json.summary || (isBugFound ? 'Potential Issue Detected' : 'No Issues Detected'),
      bugFound: isBugFound,
      bugExplanation: json.bugExplanation || (isBugFound ? 'Analysis completed.' : 'Your implementation appears logically correct. You can now run the test cases.'),
      hints: isBugFound && Array.isArray(json.hints) ? json.hints : [],
      fullExplanation: isBugFound ? (json.fullExplanation || '') : '',
      suggestedFix: isBugFound ? (json.suggestedFix || '') : '',
      testCases: Array.isArray(json.testCases) ? json.testCases : [],
      complexity: {
        time: json.complexity?.time || 'O(N)',
        space: json.complexity?.space || 'O(1)'
      },
      fixStatus: json.fixStatus || (isBugFound ? 'Issue detected in solution.' : 'Solution appears correct.')
    };
  }
}

module.exports = new GeminiService();
