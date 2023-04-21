import { getFormattedDate } from './functions'

export function logger(options) {
    return function (req, res, next) {
        if (options.log) {
            const currentDate = getFormattedDate();
            req.method,
            req.url,
            console.log(`${req.method} ${req.url} ${currentDate}`);
        }
        next();
    }
}
