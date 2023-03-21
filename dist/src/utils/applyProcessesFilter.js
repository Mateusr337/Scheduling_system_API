"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientService_1 = __importDefault(require("../services/clientService"));
function applyProcessesFilters(processes, { minValue, maxValue, minDate, maxDate, clientName, state, active, number, }) {
    if (minValue)
        processes = processes.filter((process) => process.value >= minValue);
    if (maxValue)
        processes = processes.filter((process) => process.value <= maxValue);
    if (minDate)
        processes = processes.filter((process) => process.initialDate >= minDate);
    if (maxDate)
        processes = processes.filter((process) => process.initialDate >= maxDate);
    if (state)
        processes = processes.filter((process) => process.state === state);
    if (clientName) {
        const client = clientService_1.default.findByNameOrThrow(clientName);
        processes = processes.filter((process) => process.clientId === client.id);
    }
    if (active !== undefined)
        processes = processes.filter((process) => process.active === active);
    if (number)
        processes = processes.filter((process) => process.number.includes(number.toLocaleUpperCase()));
    return processes;
}
exports.default = applyProcessesFilters;
