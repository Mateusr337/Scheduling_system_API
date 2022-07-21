# Sistema de agendamento de processos

## :link: Sobre

Uma APi com sistema de cadastro de processos com vinculo a um cliente/empresa, e pode-se cadastrar as empresas/clientes, os processos podem ser resgatados por uma série de filtros como data de inicio do processo, um intervalo de valor do processo, se esta ativo ou não, por cliente, etc.

## :hammer: Features

:ballot_box_with_check: `POST /clients` Cadastra clientes e recebe name, CNPJ e state;

:ballot_box_with_check: `GET /clients` Busca clientes;

:ballot_box_with_check: `POST /processes` Cadastra processos e recebe active, type, state, value, initialDate, clientId;

:ballot_box_with_check: `GET /processes` Busca processos e recebe filtros ('query params' listados abaixo) na URL; 

:ballot_box_with_check: `GET /processes/sum` Retorna soma dos valores dos processos, recebe filtros ('query params' listados abaixo) na URL;

:ballot_box_with_check: `GET /processes/average` Retorna média dos valores dos processos, recebe filtros ('query params' listados abaixo) na URL;

Query params na rota de processos: minValue, maxValue, minDate, maxDate, maxDate, state, clientName, number, active.

## :woman_technologist: Technologias
<div>
    <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=black" />
    <img src="https://img.shields.io/badge/ts node-3178C6?style=for-the-badge&logo=ts node&logoColor=000000" />
    <img src="https://img.shields.io/badge/node.js-363636?style=for-the-badge&logo=node.js&logoColor=339933"/>
    <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=000000"/>
    <img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=000000"/>
    <img src="https://img.shields.io/badge/supertest-141526?style=for-the-badge&logo=jest&logoColor=ffffff"/>
    <img src="https://img.shields.io/badge/joi-000000?style=for-the-badge&logo=joi&logoColor=ffffff"/>
    <img src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=heroku&logoColor=ffffff"/>
</div>

## :tada: Inicialização

```bash
# Clone esse repositório, exemplo:
git clone https://github.com/Mateusr337/Scheduling_system_API.git

# Instale as dependências
npm i

# Rode em ambiente de desenvolvimento
npm run dev

# Rodar os testes
npm run test
```
