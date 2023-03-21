"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const clientSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    CNPJ: joi_1.default
        .string()
        .required()
        .pattern(/^[0-9]{11}$/),
    state: joi_1.default
        .string()
        .required()
        .pattern(/^[A-Z]{2}$/),
});
exports.default = clientSchema;
