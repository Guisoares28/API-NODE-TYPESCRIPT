"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerMensagem = void 0;
const express_1 = require("express");
const routerMensagem = (0, express_1.Router)();
exports.routerMensagem = routerMensagem;
var lista_nomes = [];
function validarNome(nome) {
    if (lista_nomes.includes(nome)) {
        return true;
    }
    else {
        return false;
    }
}
;
routerMensagem.post("/:nome", (req, res) => {
    var nome = req.params.nome;
    if (validarNome(nome)) {
        res.json({ message: "Nome já cadastrado" });
    }
    else {
        if (nome != null || nome.length != 0) {
            lista_nomes.push(nome);
        }
        res.json({ message: "Nome ${nome} adicionado com sucesso.!" });
    }
});
routerMensagem.get("/nomes", (req, res) => {
    res.json({ nomes: lista_nomes });
});
