import { getAllPlanets } from "../../model/planets.ts";

function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}

export { httpGetAllPlanets };
