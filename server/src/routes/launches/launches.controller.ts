import { getAllLaunches } from "../../model/launches.ts";

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

export { httpGetAllLaunches };
