import {
  getAllLaunches,
  addNewLaunch,
  abortLaunch,
} from "../../model/launches.ts";
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

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);
  if (!launchId) {
    return res.status(400).json({ error: "Invalid launch id" });
  }

  if (abortLaunch(launchId)) {
    return res.status(200).json({ message: "Launch aborted successfully" });
  }
  return res.status(404).json({ error: "Launch not found" });
}

export { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
