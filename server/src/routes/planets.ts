import getPlanets from "../controllers/planets.ts";
import express from "express";
const planetRouter = express.Router();

planetRouter.get("/", getPlanets);

export default planetRouter;
