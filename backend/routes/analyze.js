const express = require('express');
const router = express.Router();
const geminiService = require('../services/geminiService');

// Supported languages map
const SUPPORTED_LANGUAGES = ['javascript', 'python', 'java', 'cpp', 'c++'];

/**
 * POST /api/analyze
 * Body: { language: string, problem: string, code: string, previousAnalysis?: object }
 */
router.post('/analyze', async (req, res, next) => {
  try {
    const { language, problem, code, previousAnalysis, failedTestCases } = req.body;

    // 1. Validation: check presence and non-emptiness
    if (!language || typeof language !== 'string' || !language.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Programming language is required.'
      });
    }

    const normLang = language.trim().toLowerCase();
    if (!SUPPORTED_LANGUAGES.includes(normLang)) {
      return res.status(400).json({
        success: false,
        error: `Unsupported programming language "${language}". Supported languages are: JavaScript, Python, Java, C++.`
      });
    }

    if (!problem || typeof problem !== 'string' || !problem.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Problem description is required. Please provide a short description of what your code is trying to solve.'
      });
    }

    if (!code || typeof code !== 'string' || !code.trim()) {
      return res.status(400).json({
        success: false,
        error: 'Source code is required. Please paste or write your code in the editor.'
      });
    }

    // 2. Perform AI analysis
    const analysis = await geminiService.analyzeCode({
      language: normLang,
      problem: problem.trim(),
      code: code.trim(),
      previousAnalysis,
      failedTestCases
    });

    // 3. Return structured response
    return res.json({
      success: true,
      analysis
    });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
