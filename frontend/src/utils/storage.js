/**
 * Helper utilities for managing solved problem progress in localStorage
 */

const STORAGE_KEY = 'codementor_solved_problems';

/**
 * Get array of solved problem IDs from localStorage
 * @returns {Array<string>}
 */
export const getSolvedProblems = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.warn('Failed to read solved problems from localStorage:', e);
    return [];
  }
};

/**
 * Mark a problem as solved in localStorage
 * @param {string} problemId
 */
export const markProblemSolved = (problemId) => {
  if (!problemId) return;
  try {
    const solved = getSolvedProblems();
    if (!solved.includes(problemId)) {
      solved.push(problemId);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(solved));
    }
  } catch (e) {
    console.warn('Failed to save solved problem to localStorage:', e);
  }
};
