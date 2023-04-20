export function logger(options) {
    return function (req, res, next) {
        if (options.log) {
            console.log(`${req.method} ${req.url}`);
        }
        next();
    }
}

// module.exports = logger;