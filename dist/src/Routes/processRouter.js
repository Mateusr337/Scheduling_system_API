"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const processController_1 = __importDefault(require("../controllers/processController"));
const validateSchemaMiddleware_1 = __importDefault(require("../middlewares/validateSchemaMiddleware"));
const processSchema_1 = __importDefault(require("../schemas/processSchema"));
const processRouter = (0, express_1.Router)();
processRouter.get('/processes', processController_1.default.find);
processRouter.get('/processes/sum', processController_1.default.sumValues);
processRouter.get('/processes/average', processController_1.default.averageValues);
processRouter.post('/processes', (0, validateSchemaMiddleware_1.default)(processSchema_1.default), processController_1.default.create);
exports.default = processRouter;
