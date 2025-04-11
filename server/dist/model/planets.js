import { createReadStream } from "node:fs";
import { parse } from "csv-parse";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var csvFilePath = join(__dirname, "..", "data", "kepler-data.csv");
var planets = [];
var parser = parse({
  comment: "#",
  columns: true,
});
// Function definitions
function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    createReadStream(csvFilePath).pipe(parser);
    parser.on("data", data => {
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
function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}
function getAllPlanets() {
  return planets;
}
export { getAllPlanets, loadPlanetsData };
