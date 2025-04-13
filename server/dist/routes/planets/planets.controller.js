import { getAllPlanets } from "../../model/planets.js";
function httpGetAllPlanets(req, res) {
  res.status(200).json(getAllPlanets());
  return;
}
export { httpGetAllPlanets };
