var launches = new Map();
var latestFlightNumber = 100;
var launch = {
  flightNumber: latestFlightNumber,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};
launches.set(launch.flightNumber, launch);
// Function definitions
function getAllLaunches() {
  return Array.from(launches.values());
}
function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customer: ["ZTM", "NASA"],
      upcoming: true,
      success: true,
    }),
  );
}
function abortLaunchById(id) {
  const aborted = launches.get(id);
  if (aborted) {
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
  }
  return false;
}
function existsLaunchWithId(id) {
  return launches.has(id);
}
export { getAllLaunches, addNewLaunch, abortLaunchById, existsLaunchWithId };
