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

CRITICAL MENTORING RULES:
1. Focus strictly on the supplied code, problem statement, and test case feedback.
2. If failed test case information is provided, analyze WHY the user's code produces the incorrect actual output for that specific input.
3. Do NOT immediately dump the complete final answer. Provide progressive hints (Hint 1: High level direction; Hint 2: Specific logic flaw location; Hint 3: Actionable structural pointer).
4. If the code passes all tests or is already optimal, set bugFound to false and explain why the logic is clean.
5. Return ONLY a valid JSON object matching the requested schema. No markdown text outside the JSON.

JSON SCHEMA:
{
  "summary": "Short 1-line summary of findings (e.g. 'Fails on duplicate elements boundary test')",
  "bugFound": true,
  "bugExplanation": "Clear explanation of the logic flaw causing the test failure or issue",
  "hints": [
    "Hint 1: High-level pointer without giving away the exact solution",
    "Hint 2: Specific logic flaw location or edge-case concept",
    "Hint 3: Direct actionable suggestion for how to structure the fix"
  ],
  "fullExplanation": "Detailed step-by-step walkthrough of the root cause and why the fix works",
  "suggestedFix": "The full corrected code snippet in ${language}",
  "testCases": [
    {
      "name": "Normal Case",
      "input": "Sample standard input",
      "expectedOutput": "Expected output",
      "reason": "Why this test case matters"
    },
    {
      "name": "Edge Case",
      "input": "Sample edge input",
      "expectedOutput": "Expected output",
      "reason": "Why this test case matters"
    }
  ],
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
            temperature: 0.2,
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

    return {
      summary: json.summary || 'Code analysis complete.',
      bugFound: typeof json.bugFound === 'boolean' ? json.bugFound : true,
      bugExplanation: json.bugExplanation || 'Analysis completed successfully.',
      hints: Array.isArray(json.hints) && json.hints.length > 0
        ? json.hints
        : ['Check your loop bounds and indices.', 'Verify variable initializations.'],
      fullExplanation: json.fullExplanation || json.bugExplanation || 'Walkthrough completed.',
      suggestedFix: json.suggestedFix || code,
      testCases: Array.isArray(json.testCases) ? json.testCases : [],
      complexity: {
        time: json.complexity?.time || 'O(N)',
        space: json.complexity?.space || 'O(1)'
      },
      fixStatus: json.fixStatus || (json.bugFound ? 'Issue detected in solution.' : 'Solution appears correct.')
    };
  }
}

module.exports = new GeminiService();
