"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const clients_1 = __importDefault(require("../../src/Database/clients"));
const processes_1 = __importDefault(require("../../src/Database/processes"));
const clientFactory_1 = __importDefault(require("../factories/clientFactory"));
const processesFactory_1 = __importDefault(require("../factories/processesFactory"));
const agent = (0, supertest_1.default)(app_1.default);
describe('test cases', () => {
    it('should answer with sum of processes active - 1.087.000,00 cents', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield agent.get('/processes/sum?active=true');
        expect(response.body.sum).toEqual(108700000);
    }));
    it('should answer with average of state and client name - 110.000,00', () => __awaiter(void 0, void 0, void 0, function* () {
        const client = 'Empresa A';
        const state = 'RJ';
        const response = yield agent.get(`/processes/average?state=${state}&clientName=${client}`);
        expect(response.body.average).toEqual(11000000);
    }));
    it('should answer with value processes bigger than 100.000,00', () => __awaiter(void 0, void 0, void 0, function* () {
        const min = 10000001;
        const response = yield agent.get(`/processes?minValue=${min}`);
        expect(response.body).toHaveLength(2);
    }));
    it('should answer with processes of date SET 2007', () => __awaiter(void 0, void 0, void 0, function* () {
        const minDate = '2007-9-1';
        const maxDate = '2007-9-31';
        const response = yield agent.get(`/processes?minDate=${minDate}&maxDate=${maxDate}`);
        expect(response.body).toHaveLength(1);
        expect(response.body[0].number).toEqual('00010TRABAM');
    }));
    it("should answer with processes of client 'Empresa A' in same state", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = clients_1.default.find((client) => client.name === 'Empresa A'.toLowerCase());
        const processesToValid = processes_1.default.filter((process) => process.number === '00004CIVELRJ' || process.number === '00001CIVELRJ');
        const response = yield agent.get(`/processes?state=${client === null || client === void 0 ? void 0 : client.state}&clientName=${client === null || client === void 0 ? void 0 : client.name}`);
        expect(response.body).toHaveLength(2);
        expect(response.body).toEqual(processesToValid);
    }));
    it("should answer with processes of client 'Empresa B' in same state", () => __awaiter(void 0, void 0, void 0, function* () {
        const client = clients_1.default.find((client) => client.name === 'Empresa B'.toLowerCase());
        const processesToValid = processes_1.default.filter((process) => process.number === '00008CIVELSP' || process.number === '00009CIVELSP');
        const response = yield agent.get(`/processes?state=${client === null || client === void 0 ? void 0 : client.state}&clientName=${client === null || client === void 0 ? void 0 : client.name}`);
        expect(response.body).toHaveLength(2);
        expect(response.body).toEqual(processesToValid);
    }));
    it('should answer with processes with TRAB in the number', () => __awaiter(void 0, void 0, void 0, function* () {
        const partialNumber = 'TRAB';
        const processesToValid = processes_1.default.filter((process) => process.number.includes(partialNumber));
        const response = yield agent.get(`/processes?number=${partialNumber}`);
        expect(response.body).toHaveLength(2);
        expect(response.body).toEqual(processesToValid);
    }));
});
describe('complement tests in the application', () => {
    beforeEach(() => {
        clients_1.default.splice(0);
        processes_1.default.splice(0);
    });
    describe('POST /client', () => {
        it('should answer with status code 200 and create client', () => __awaiter(void 0, void 0, void 0, function* () {
            const clientData = clientFactory_1.default.insertClientData();
            const response = yield agent.post('/clients').send(clientData);
            expect(response.status).toEqual(201);
            expect(clients_1.default).toHaveLength(1);
        }));
        it('should answer with status code 409 and create a client', () => __awaiter(void 0, void 0, void 0, function* () {
            const clientData = clientFactory_1.default.insertClientData();
            yield agent.post('/clients').send(clientData);
            const response = yield agent.post('/clients').send(clientData);
            expect(response.status).toEqual(409);
            expect(clients_1.default).toHaveLength(1);
        }));
    });
    describe('GET /clients', () => {
        it('should answer with status code 200 and clients', () => __awaiter(void 0, void 0, void 0, function* () {
            clientFactory_1.default.createClient();
            const response = yield agent.get('/clients');
            expect(response.status).toEqual(200);
            expect(response.body).toHaveLength(1);
        }));
    });
    describe('POST /processes', () => {
        it('should answer with status code 201 and create process', () => __awaiter(void 0, void 0, void 0, function* () {
            const client = clientFactory_1.default.createClient();
            const processData = processesFactory_1.default.insertProcessData(client.id);
            const response = yield agent.post('/processes').send(processData);
            expect(response.status).toEqual(201);
            expect(processes_1.default).toHaveLength(1);
        }));
        it(`
      should answer with status code 201 and create two process
      test format number while have one process
    `, () => __awaiter(void 0, void 0, void 0, function* () {
            const client = clientFactory_1.default.createClient();
            const processData = processesFactory_1.default.insertProcessData(client.id);
            yield agent.post('/processes').send(processData);
            const response = yield agent.post('/processes').send(processData);
            expect(response.status).toEqual(201);
            expect(processes_1.default).toHaveLength(2);
        }));
        it('should answer with status code 404 and no create process while client no-exist', () => __awaiter(void 0, void 0, void 0, function* () {
            const processData = processesFactory_1.default.insertProcessData(1);
            yield agent.post('/processes').send(processData);
            const response = yield agent.post('/processes').send(processData);
            expect(response.status).toEqual(404);
            expect(processes_1.default).toHaveLength(0);
        }));
    });
});
