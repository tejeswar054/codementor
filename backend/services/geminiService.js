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
   * Analyze submitted code and problem description
   * @param {Object} params
   * @param {string} params.language
   * @param {string} params.problem
   * @param {string} params.code
   * @param {Object} [params.previousAnalysis]
   */
  async analyzeCode({ language, problem, code, previousAnalysis }) {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is missing on the server. Please check your .env configuration.');
    }

    if (!this.genAI) {
      this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    }

    const systemInstruction = `
You are CodeMentor AI, an expert programming mentor helping students and junior developers debug code.
Your goal is to act as a mentor: guide the user through clear root-cause explanations, progressive hints, test case generation, and complexity analysis.

CRITICAL RULES:
1. Focus strictly on the supplied code and problem statement.
2. Do not invent errors if none exist.
3. If the code is already correct, set bugFound to false, provide encouraging hints, and explain why the code is optimal.
4. If previous analysis is provided, compare the new code against the previous bug to determine if it is fixed.
5. Return ONLY a valid JSON object matching the requested schema. No markdown text outside the JSON.

JSON SCHEMA:
{
  "summary": "Short 1-line summary of findings",
  "bugFound": true,
  "bugExplanation": "Clear explanation of the problem and why it happens",
  "hints": [
    "Hint 1: High-level pointer without giving away the exact solution",
    "Hint 2: Specific logic flaw location or variable concept",
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
      "input": "Sample edge input (duplicates, negative values, 1-element arrays, etc)",
      "expectedOutput": "Expected output",
      "reason": "Why this test case matters"
    },
    {
      "name": "Boundary Case",
      "input": "Boundary conditions (empty input, max integer, etc)",
      "expectedOutput": "Expected output or Exception handling",
      "reason": "Why this test case matters"
    }
  ],
  "complexity": {
    "time": "O(...) explanation",
    "space": "O(...) explanation"
  },
  "fixStatus": "Bug appears to be fixed."
}
`;

    let prompt = `
${systemInstruction}

[SUBMITTED CODE DETAILS]
Language: ${language}
Problem Statement:
${problem}

Code to Analyze:
\`\`\`${language}
${code}
\`\`\`
`;

    if (previousAnalysis) {
      prompt += `
[PREVIOUS ANALYSIS CONTEXT]
Previous Bug Explanation: ${previousAnalysis.bugExplanation || 'N/A'}
Previous Summary: ${previousAnalysis.summary || 'N/A'}
Please check if the user's updated code resolves the previous bug, and set "fixStatus" accordingly (e.g. "Bug appears to be fixed." or "Original bug persists.").
`;
    }

    // List of model candidates in order of preference
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
      testCases: Array.isArray(json.testCases) ? json.testCases : [
        {
          name: 'Normal Case',
          input: 'Standard input array/arguments',
          expectedOutput: 'Expected solution output',
          reason: 'Validates basic correct execution'
        }
      ],
      complexity: {
        time: json.complexity?.time || 'Not specified',
        space: json.complexity?.space || 'Not specified'
      },
      fixStatus: json.fixStatus || (json.bugFound ? 'Issue detected in code.' : 'Code appears to be working correctly.')
    };
  }
}

module.exports = new GeminiService();
