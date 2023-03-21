"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const processSchema = joi_1.default.object({
    active: joi_1.default.boolean().required(),
    type: joi_1.default.string().required().valid('TRAB', 'CIVEL'),
    state: joi_1.default
        .string()
        .required()
        .pattern(/^[A-Z]{2}$/),
    value: joi_1.default.number().integer().required(),
    initialDate: joi_1.default
        .string()
        .required()
        .pattern(/^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/),
    clientId: joi_1.default.number().integer().required(),
});
exports.default = processSchema;
