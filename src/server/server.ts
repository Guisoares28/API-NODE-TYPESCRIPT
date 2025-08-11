
import express from "express";
import { routerMensagem } from "./routes/mensagemRouter";
import 'dotenv/config';

const app = express();

app.use(express.json());

app.use("/mensagem", routerMensagem);

export{ app };