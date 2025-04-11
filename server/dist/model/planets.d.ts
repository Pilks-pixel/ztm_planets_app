declare function loadPlanetsData(): Promise<void>;
declare function getAllPlanets(): Planet[];
type Planet = {
  kepoi_name: string;
  koi_disposition: string;
  koi_insol: number;
  koi_prad: number;
};
export { getAllPlanets, loadPlanetsData };
