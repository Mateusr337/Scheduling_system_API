"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function badRequestError(entity) {
    return {
        type: 'bad_request',
        message: `Request data error: "${entity}"!`,
    };
}
exports.default = badRequestError;
