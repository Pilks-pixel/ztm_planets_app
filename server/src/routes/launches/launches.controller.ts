import { getAllLaunches, addNewLaunch } from "../../model/launches.ts";
import type { Launch } from "../../model/launches.ts";

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch: Launch = req.body;
  launch.launchDate = new Date(launch.launchDate);

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

export { httpGetAllLaunches, httpAddNewLaunch };
