declare function getAllLaunches(): Launch[];
declare function addNewLaunch(launch: Launch): void;
declare function abortLaunchById(id: number): Launch | boolean;
declare function existsLaunchWithId(id: number): boolean;
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
