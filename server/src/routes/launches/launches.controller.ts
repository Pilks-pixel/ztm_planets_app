import express from "express";

import {
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
  existsLaunchWithId,
} from "../../model/launches.ts";
import type { Launch } from "../../model/launches.ts";

function httpGetAllLaunches(req: express.Request, res: express.Response) {
  res.status(200).json(getAllLaunches());
  return;
}

function httpAddNewLaunch(req: express.Request, res: express.Response) {
  const launch: Launch = req.body;
  if (launch.launchDate) {
    launch.launchDate = new Date(launch.launchDate);
  }

  console.log(launch);

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    res.status(400).json({
      error: "Missing required launch property",
    });
    return;
  }

  if (isNaN(launch.launchDate.getTime())) {
    res.status(400).json({
      error: "Invalid launch date",
    });
    return;
  }

  addNewLaunch(launch);
  res.status(201).json(launch);
  return;
}

function httpAbortLaunch(req: express.Request, res: express.Response) {
  const launchId = Number(req.params.id);
  if (!launchId) {
    res.status(400).json({ error: "Invalid launch id" });
    return;
  }

  if (!existsLaunchWithId(launchId)) {
    res.status(404).json({ error: "Launch not found" });
    return;
  }

  const aborted = abortLaunchById(launchId);
  res.status(200).json(aborted);
  return;
}

export { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
