var launches: Map<number | string, Launch> = new Map();
var latestFlightNumber = 100;

var launch: Launch = {
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
function getAllLaunches(): Launch[] {
  return Array.from(launches.values());
}

function addNewLaunch(launch: Launch): void {
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

function abortLaunchById(id: number): Launch | boolean {
  const aborted = launches.get(id);
  if (aborted) {
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
  }

  return false;
}

function existsLaunchWithId(id: number): boolean {
  return launches.has(id);
}

// Type definitions
type Launch = {
  flightNumber: number;
  mission: string;
  rocket: string;
  launchDate: Date;
  target: string;
  customer: string[];
  upcoming: boolean;
  success: boolean;
};

export type { Launch };
export { getAllLaunches, addNewLaunch, abortLaunchById, existsLaunchWithId };
