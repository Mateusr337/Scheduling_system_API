"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function notFoundError(entity) {
    return {
        type: 'error_not_found',
        message: `Could not find specified "${entity}"!`,
    };
}
exports.default = notFoundError;
