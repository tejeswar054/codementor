/**
 * Global Error Handling Middleware for Express
 */
function errorHandler(err, req, res, next) {
  console.error('❌ Server Error:', err.message || err);

  const statusCode = err.statusCode || 500;
  let clientMessage = err.message || 'An unexpected error occurred while analyzing the code.';

  // Handle specific Gemini API Key or authentication errors safely
  if (clientMessage.includes('API_KEY') || clientMessage.includes('API key')) {
    clientMessage = 'Server configuration error: Unable to authenticate with AI service. Please check API key setup.';
  } else if (clientMessage.includes('429') || clientMessage.toLowerCase().includes('quota') || clientMessage.toLowerCase().includes('rate limit')) {
    clientMessage = '⚠️ Gemini API Free Tier Rate Limit Reached (20 requests/min). Please wait 30 seconds and click Analyze Code again.';
  }

  res.status(statusCode).json({
    success: false,
    error: clientMessage
  });
}

module.exports = errorHandler;
