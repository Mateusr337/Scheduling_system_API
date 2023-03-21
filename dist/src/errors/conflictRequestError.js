"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function conflictRequestError(entity) {
    return {
        type: 'error_conflict',
        message: `Conflict on entry "${entity}"!`,
    };
}
exports.default = conflictRequestError;
