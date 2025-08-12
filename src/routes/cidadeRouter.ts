import express from "express";
import { CidadeController } from "../controllers/cidadeController";

const cidadeRouter = express.Router();

cidadeRouter.post("/", CidadeController.createCidade);

export{ cidadeRouter };