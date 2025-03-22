import express from "express";
import { getAllLaunches } from "./launches.controller.ts";

const launchesRouter = express.Router();

launchesRouter.get("/", getAllLaunches);

export default launchesRouter;
