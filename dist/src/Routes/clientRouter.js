"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = __importDefault(require("../controllers/clientController"));
const validateSchemaMiddleware_1 = __importDefault(require("../middlewares/validateSchemaMiddleware"));
const clientSchema_1 = __importDefault(require("../schemas/clientSchema"));
const clientRouter = (0, express_1.Router)();
clientRouter.get('/clients', clientController_1.default.find);
clientRouter.post('/clients', (0, validateSchemaMiddleware_1.default)(clientSchema_1.default), clientController_1.default.create);
exports.default = clientRouter;
