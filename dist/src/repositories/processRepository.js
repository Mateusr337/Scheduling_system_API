"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processes_1 = __importDefault(require("../Database/processes"));
function findAll() {
    return processes_1.default;
}
function create(process) {
    processes_1.default.push(process);
    return processes_1.default;
}
exports.default = {
    findAll,
    create,
};
