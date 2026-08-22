/**
 * In-Memory Express Rate Limiter Middleware for Gemini AI Analysis Route.
 * Enforces a strict limit of MAX 2 requests per minute (60,000ms) per IP address.
 */

const ipRequestMap = new Map();

// Periodic cleanup every 5 minutes to prevent memory accumulation
setInterval(() => {
  const now = Date.now();
  const windowMs = 60 * 1000;
  for (const [ip, timestamps] of ipRequestMap.entries()) {
    const validTimestamps = timestamps.filter((t) => now - t < windowMs);
    if (validTimestamps.length === 0) {
      ipRequestMap.delete(ip);
    } else {
      ipRequestMap.set(ip, validTimestamps);
    }
  }
}, 5 * 60 * 1000);

/**
 * Middleware to restrict AI analysis calls to 2 requests per minute per IP.
 */
function analyzeRateLimiter(req, res, next) {
  const ip = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 2;

  let requestTimestamps = ipRequestMap.get(ip) || [];
  // Filter out timestamps outside the 1-minute window
  requestTimestamps = requestTimestamps.filter((timestamp) => now - timestamp < windowMs);

  if (requestTimestamps.length >= maxRequests) {
    return res.status(429).json({
      success: false,
      error: '⚠️ Rate Limit Reached: You can make a maximum of 2 AI requests per minute. Please wait 1 minute before requesting another analysis.'
    });
  }

  requestTimestamps.push(now);
  ipRequestMap.set(ip, requestTimestamps);
  next();
}

module.exports = { analyzeRateLimiter };
