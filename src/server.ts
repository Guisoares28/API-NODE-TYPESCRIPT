
import express from "express";
import 'dotenv/config';
import { cidadeRouter } from "./modules/cidade/cidadeRouter"

const app = express();

app.use(express.json());

app.use("/cidade", cidadeRouter);

export{ app };