const Boom = require('@hapi/Boom');

function validate() {
    return false;
}

function validationHanlder(schema, check = 'body') {
    return function (req, res, next) {
        const err = validate(req[check], schema);

        err ? next(Boom.badRequest(err)) : next();
    }
}

module.exports = validationHanlder;