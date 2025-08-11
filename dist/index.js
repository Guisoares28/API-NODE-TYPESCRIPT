"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
var PORT = process.env.PORT || 3333;
server_1.app.listen(PORT, () => console.log(`App rodando na porta: ${PORT}`));
