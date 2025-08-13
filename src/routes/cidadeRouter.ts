import express from "express";
import { CidadeController } from "../controllers/cidadeController";
import { CidadeSchema } from "../dtos/cidadeDTO";
import { CidadeMiddleware } from "../middlewares/cidadeMiddleware";

const cidadeRouter = express.Router();

cidadeRouter.post("/", 
    CidadeMiddleware.validarDadosMiddleware(),
    CidadeController.createCidade,
    );

export{ cidadeRouter };