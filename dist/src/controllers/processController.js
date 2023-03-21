"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processService_1 = __importDefault(require("../services/processService"));
function sumValues(req, res) {
    const filters = destructorQuery(req.query);
    const sum = processService_1.default.sumValues(filters);
    res.status(200).send({ sum });
}
function averageValues(req, res) {
    const filters = destructorQuery(req.query);
    const average = processService_1.default.averageValues(filters);
    res.status(200).send({ average });
}
function find(req, res) {
    const filters = destructorQuery(req.query);
    const processes = processService_1.default.find(filters);
    res.status(200).send(processes);
}
function create(req, res) {
    const process = req.body;
    const processes = processService_1.default.create(process);
    res.status(201).send(processes);
}
function destructorQuery(filters) {
    const minValue = parseInt(filters.minValue);
    const maxValue = parseInt(filters.maxValue);
    const maxDate = filters.maxDate;
    const minDate = filters.minDate;
    const state = filters.state;
    const clientName = filters.clientName;
    const number = filters.number;
    let { active } = filters;
    if (active === 'true')
        active = true;
    if (active === 'false')
        active = false;
    return {
        minValue,
        maxValue,
        minDate,
        maxDate,
        state,
        clientName,
        number,
        active,
    };
}
exports.default = {
    sumValues,
    averageValues,
    find,
    create,
};
