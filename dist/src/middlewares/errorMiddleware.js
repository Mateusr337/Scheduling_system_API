"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlingMiddleware(error, req, res, next) {
    if (error.type === 'error_not_found')
        return res.status(404).send(error.message);
    if (error.type === 'bad_request')
        return res.status(422).send(error.message);
    if (error.type === 'unauthorized')
        return res.status(401).send(error.message);
    if (error.type === 'error_conflict')
        return res.status(409).send(error.message);
    console.log(error);
    return res.sendStatus(500);
}
exports.default = errorHandlingMiddleware;
