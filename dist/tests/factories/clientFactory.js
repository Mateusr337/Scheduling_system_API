"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_1 = __importDefault(require("../../src/Database/clients"));
function insertClientData() {
    return {
        name: 'empresa x',
        CNPJ: '12345678910',
        state: 'RS',
    };
}
function createClient() {
    const client = insertClientData();
    clients_1.default.push(Object.assign(Object.assign({}, client), { id: 1 }));
    return clients_1.default[0];
}
exports.default = {
    insertClientData,
    createClient,
};
