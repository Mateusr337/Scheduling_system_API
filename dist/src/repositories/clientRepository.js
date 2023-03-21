"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_1 = __importDefault(require("../Database/clients"));
function findAll() {
    return clients_1.default;
}
function findByName(clientName) {
    return clients_1.default.find((client) => client.name === clientName);
}
function findById(clientId) {
    return clients_1.default.find((client) => client.id === clientId);
}
function create(client) {
    clients_1.default.push(client);
    return clients_1.default;
}
exports.default = {
    findAll,
    findByName,
    create,
    findById,
};
