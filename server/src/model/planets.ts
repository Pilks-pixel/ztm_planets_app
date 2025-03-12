import { createReadStream } from "node:fs";
import { parse } from "csv-parse";

var planets: Planet[] = [];
var parser = parse({
  comment: "#",
  columns: true,
});

type Planet = {
  kepoi_name: string;
  koi_disposition: string;
  koi_insol: number;
  koi_prad: number;
};

createReadStream("./kepler-data.csv").pipe(parser);

parser.on("data", (data: Planet) => {
  if (isHabitablePlanet(data)) {
    planets.push(data);
  }
});

parser.on("error", err => {
  console.error("Error parsing CSV:", err);
});

parser.on("end", () => {
  console.log("Parsing completed:", planets);
});

function isHabitablePlanet(planet: Planet): boolean {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

export default planets;
