import { getAllPlanets } from "../../model/planets.js";
function httpGetAllPlanets(req, res) {
  return res.status(200).json(getAllPlanets());
}
export { httpGetAllPlanets };
