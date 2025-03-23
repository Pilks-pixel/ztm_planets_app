import { httpGetAllPlanets } from "./planets.controller.ts";
import express from "express";
const planetRouter = express.Router();

planetRouter.get("/", httpGetAllPlanets);

export default planetRouter;
