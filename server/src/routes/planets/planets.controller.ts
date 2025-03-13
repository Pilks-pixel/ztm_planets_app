import { planets } from "../../model/planets.ts";

function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}

export { getAllPlanets };
