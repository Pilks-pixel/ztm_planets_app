import { getAllPlanets } from "./planets.controller.ts";
import express from "express";
const planetRouter = express.Router();

planetRouter.get("/", getAllPlanets);

export default planetRouter;
