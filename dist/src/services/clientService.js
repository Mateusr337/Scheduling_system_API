"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_1 = __importDefault(require("../Database/clients"));
const conflictRequestError_1 = __importDefault(require("../errors/conflictRequestError"));
const notFoundError_1 = __importDefault(require("../errors/notFoundError"));
const clientRepository_1 = __importDefault(require("../repositories/clientRepository"));
const getNewId_1 = __importDefault(require("../utils/getNewId"));
function findByName(clientName) {
    return clientRepository_1.default.findByName(clientName.toLowerCase());
}
function findByNameOrThrow(clientName) {
    const client = findByName(clientName);
    if (!client)
        throw (0, notFoundError_1.default)('client');
    return client;
}
function find() {
    return clientRepository_1.default.findAll();
}
function findByIdOrThrow(clientId) {
    const client = clientRepository_1.default.findById(clientId);
    if (!client)
        throw (0, notFoundError_1.default)('client');
    return client;
}
function create(clientData) {
    const newId = (0, getNewId_1.default)(clients_1.default);
    validateCNPJ(clientData.CNPJ);
    return clientRepository_1.default.create(Object.assign(Object.assign({}, clientData), { id: newId }));
}
function validateCNPJ(CNPJ) {
    const clients = clientRepository_1.default.findAll();
    const client = clients.find((client) => client.CNPJ === CNPJ);
    if (client)
        throw (0, conflictRequestError_1.default)('client');
}
exports.default = {
    findByName,
    findByNameOrThrow,
    find,
    create,
    findByIdOrThrow,
};
