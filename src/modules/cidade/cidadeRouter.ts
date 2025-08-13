import express from "express";
import { CidadeController } from "./cidadeController";
import { validateSchema } from "../../shared/middlewares/validate-middleware";
import { cidadeSchema } from "./cidadeSchema";

export const cidadeRouter = express.Router();

cidadeRouter.post("/", 
    validateSchema("body",cidadeSchema),
    CidadeController.createCidade,
    );

