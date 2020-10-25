const { config } = require('../../config');
const response = require('../../network/response');

function logErrors(err, req, res, next) {
    if (config.api.dev) {
        console.log(err);
    }
    next(err);
}

function errorHandler(err, req, res, next) { //eslint-disable-line
    response.error(req, res, err.message, err.status)
}

module.exports = {
    logErrors,
    errorHandler
};