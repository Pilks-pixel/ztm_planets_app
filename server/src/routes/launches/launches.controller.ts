import { launches } from "../../model/launches.ts";

function getAllLaunches(req, res) {
  return res.status(200).json(Array.from(launches.values()));
}

export { getAllLaunches };
