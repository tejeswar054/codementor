const path = require('path');
// Load environment variables from root directory .env file
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const express = require('express');
const cors = require('cors');
const analyzeRoute = require('./routes/analyze');
const executeRoute = require('./routes/execute');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '1mb' }));

// Request Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'CodeMentor AI Backend API',
    geminiKeyConfigured: Boolean(process.env.GEMINI_API_KEY),
    executionMode: process.env.CODE_EXECUTION_MODE || 'sandbox',
    judge0Configured: Boolean(process.env.JUDGE0_API_KEY)
  });
});

// API Routes
app.use('/api', analyzeRoute);
app.use('/api', executeRoute);

// Centralized Error Handler
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 CodeMentor AI Backend listening on http://localhost:${PORT}`);
  console.log(`🔑 Gemini API Key configured: ${process.env.GEMINI_API_KEY ? 'Yes' : 'No (Check .env)'}`);
  console.log(`⚡ Execution Mode: ${process.env.CODE_EXECUTION_MODE || 'sandbox'} (Judge0 API Key: ${process.env.JUDGE0_API_KEY ? 'Configured' : 'Not Set (Using Local VM Sandbox)'})`);
});
