import { createReadStream } from "node:fs";
import path from "node:path";
import { parse } from "csv-parse";

var csvFilePath = path.join(
  import.meta.dirname,
  "..",
  "data",
  "kepler-data.csv",
);
var planets: Planet[] = [];
var parser = parse({
  comment: "#",
  columns: true,
});

// Function definitions
function loadPlanetsData(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    createReadStream(csvFilePath).pipe(parser);

    parser.on("data", (data: Planet) => {
      if (isHabitablePlanet(data)) {
        planets.push(data);
      }
    });

    parser.on("error", err => {
      console.error("Error parsing CSV:", err);
      reject(err);
    });

    parser.on("end", () => {
      console.log(
        "Parsing completed:",
        planets.length,
        "habitable planets found.",
      );
      resolve();
    });
  });
}

function isHabitablePlanet(planet: Planet): boolean {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function getAllPlanets(): Planet[] {
  return planets;
}

// Type definitions
type Planet = {
  kepoi_name: string;
  koi_disposition: string;
  koi_insol: number;
  koi_prad: number;
};

export { getAllPlanets, loadPlanetsData };
