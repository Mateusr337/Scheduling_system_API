"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getNewId(database) {
    var _a;
    const lastId = (_a = database.at(-1)) === null || _a === void 0 ? void 0 : _a.id;
    return lastId ? lastId + 1 : 0;
}
exports.default = getNewId;
