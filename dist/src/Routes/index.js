"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientRouter_1 = __importDefault(require("./clientRouter"));
const processRouter_1 = __importDefault(require("./processRouter"));
const appRouter = (0, express_1.Router)();
appRouter.use(processRouter_1.default);
appRouter.use(clientRouter_1.default);
exports.default = appRouter;
