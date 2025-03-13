import { planets } from "../../model/planets.ts";

console.log("all planets", planets);
function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}

export { getAllPlanets };
