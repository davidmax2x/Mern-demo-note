import rateLimit from 'express-rate-limit';

// Basic rate limiter - limits each IP to a certain number of requests per window time
export const basicLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 100 requests per window (15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: {
        status: 429,
        message: 'Too many requests, please try again later.'
    }
});

// More strict limiter for sensitive routes (like authentication)
export const strictLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // Limit each IP to 10 requests per window (1 hour)
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        status: 429,
        message: 'Too many attempts, please try again after an hour.'
    }
});
