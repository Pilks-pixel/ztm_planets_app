import { getAllLaunches, addNewLaunch } from "../../model/launches.ts";
import type { Launch } from "../../model/launches.ts";

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch: Launch = req.body;
  launch.launchDate = new Date(launch.launchDate);

  console.log(launch);

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }

  if (isNaN(launch.launchDate.getTime())) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

export { httpGetAllLaunches, httpAddNewLaunch };
