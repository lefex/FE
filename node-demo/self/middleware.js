module.exports = function(options) {
    return function(req, res, next) {
        next();
    };
}