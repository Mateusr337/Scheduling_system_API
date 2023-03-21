"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function insertProcessData(clientId) {
    return {
        active: true,
        type: 'CIVEL',
        state: 'RJ',
        value: 20000000,
        initialDate: '2007-10-10',
        clientId,
    };
}
exports.default = {
    insertProcessData,
};
