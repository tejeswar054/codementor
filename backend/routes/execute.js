const express = require('express');
const router = express.Router();
const executionService = require('../services/executionService');

/**
 * POST /api/execute
 * Body: { language: string, code: string, functionName: string, testCases: Array }
 */
router.post('/execute', async (req, res, next) => {
  try {
    const { language = 'javascript', code, functionName, testCases } = req.body;

    if (!code || typeof code !== 'string' || !code.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Source code is required for test execution.'
      });
    }

    if (!functionName || typeof functionName !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Target functionName is required for test execution.'
      });
    }

    if (!Array.isArray(testCases) || testCases.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Test cases array is required for execution.'
      });
    }

    const executionResult = await executionService.executeCode({
      language,
      code: code.trim(),
      functionName: functionName.trim(),
      testCases,
    });

    return res.json(executionResult);

  } catch (error) {
    next(error);
  }
});

module.exports = router;
