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
    clientMessage = 'AI service rate limit exceeded. Please wait a moment and try again.';
  }

  res.status(statusCode).json({
    success: false,
    error: clientMessage
  });
}

module.exports = errorHandler;
