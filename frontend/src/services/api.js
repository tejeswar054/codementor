import axios from 'axios';

// In production (Vercel), VITE_API_URL points to the Render backend.
// In local dev, falls back to '/api' which is proxied by Vite to localhost:5000.
const BASE_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : '/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 45000, // 45 seconds max timeout
});

/**
 * Send code analysis request to backend
 * @param {Object} data
 * @param {string} data.language
 * @param {string} data.problem
 * @param {string} data.code
 * @param {Object} [data.previousAnalysis]
 * @param {Array} [data.failedTestCases]
 */
export const analyzeCodeAPI = async ({ language, problem, code, previousAnalysis, failedTestCases }) => {
  try {
    const response = await api.post('/analyze', {
      language,
      problem,
      code,
      previousAnalysis,
      failedTestCases,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Server error occurred during analysis.');
    } else if (error.request) {
      throw new Error('Network error: Unable to connect to backend server. Please verify backend is running on port 5000.');
    } else {
      throw new Error(error.message || 'Failed to submit analysis request.');
    }
  }
};

/**
 * Send code execution request to backend sandbox
 * @param {Object} data
 * @param {string} data.language
 * @param {string} data.code
 * @param {string} data.functionName
 * @param {Array} data.testCases
 */
export const executeCodeAPI = async ({ language, code, functionName, testCases }) => {
  try {
    const response = await api.post('/execute', {
      language,
      code,
      functionName,
      testCases,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Server error occurred during test execution.');
    } else if (error.request) {
      throw new Error('Network error: Unable to connect to execution engine.');
    } else {
      throw new Error(error.message || 'Failed to execute test cases.');
    }
  }
};
