import express from "express";
import { getAllPlanets } from "../../model/planets.ts";

function httpGetAllPlanets(req: express.Request, res: express.Response) {
  res.status(200).json(getAllPlanets());
  return;
}

export { httpGetAllPlanets };
