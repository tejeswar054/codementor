import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 45000, // 45 seconds max timeout for Gemini AI analysis
});

/**
 * Send code analysis request to backend
 * @param {Object} data
 * @param {string} data.language
 * @param {string} data.problem
 * @param {string} data.code
 * @param {Object} [data.previousAnalysis]
 */
export const analyzeCodeAPI = async ({ language, problem, code, previousAnalysis }) => {
  try {
    const response = await api.post('/analyze', {
      language,
      problem,
      code,
      previousAnalysis,
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
