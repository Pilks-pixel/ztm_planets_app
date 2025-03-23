import express from "express";
import { httpGetAllLaunches } from "./launches.controller.ts";

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);

export default launchesRouter;
