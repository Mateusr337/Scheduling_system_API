"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processes_1 = __importDefault(require("../Database/processes"));
const processRepository_1 = __importDefault(require("../repositories/processRepository"));
const applyProcessesFilter_1 = __importDefault(require("../utils/applyProcessesFilter"));
const getNewId_1 = __importDefault(require("../utils/getNewId"));
const clientService_1 = __importDefault(require("./clientService"));
function sumValues(filters) {
    let processes = processRepository_1.default.findAll();
    processes = (0, applyProcessesFilter_1.default)(processes, filters);
    return processes.reduce((sum, process) => (sum += process.value), 0);
}
function averageValues(filters) {
    let processes = processRepository_1.default.findAll();
    processes = (0, applyProcessesFilter_1.default)(processes, filters);
    return (processes.reduce((sum, process) => (sum += process.value), 0) /
        processes.length);
}
function find(filters) {
    let processes = processRepository_1.default.findAll();
    if (filters)
        processes = (0, applyProcessesFilter_1.default)(processes, filters);
    return processes;
}
function create(process) {
    const newId = (0, getNewId_1.default)(processes_1.default);
    const client = clientService_1.default.findByIdOrThrow(process.clientId);
    const number = createNumber(process.type, process.state);
    return processRepository_1.default.create(Object.assign(Object.assign({}, process), { id: newId, number, clientId: client.id }));
}
function createNumber(type, state) {
    const lastProcess = find().at(-1);
    let newNumber = lastProcess
        ? `${parseInt(lastProcess.number.slice(0, 5)) + 1}`
        : '00000';
    const length = newNumber.length;
    if (length < 5)
        newNumber = '0'.repeat(5 - length) + newNumber;
    return newNumber + type + state;
}
exports.default = {
    sumValues,
    averageValues,
    find,
    create,
};
