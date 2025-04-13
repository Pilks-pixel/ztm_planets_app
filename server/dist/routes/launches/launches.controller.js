import {
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
  existsLaunchWithId,
} from "../../model/launches.js";
function httpGetAllLaunches(req, res) {
  res.status(200).json(getAllLaunches());
  return;
}
function httpAddNewLaunch(req, res) {
  const launch = req.body;
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
function httpAbortLaunch(req, res) {
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
