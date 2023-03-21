"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientService_1 = __importDefault(require("../services/clientService"));
function find(req, res) {
    const clients = clientService_1.default.find();
    res.status(200).send(clients);
}
function create(req, res) {
    const clients = clientService_1.default.create(req.body);
    res.status(201).send(clients);
}
exports.default = {
    find,
    create,
};
