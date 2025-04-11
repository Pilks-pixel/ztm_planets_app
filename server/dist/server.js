import { createServer } from "node:http";
import app from "./app.js";
import { loadPlanetsData } from "./model/planets.js";
var port = process.env.PORT || 8000;
var server = createServer(app);
startServer();
async function startServer() {
  await loadPlanetsData();
  server.listen(port, function () {
    console.log(`Server listening on port ${port}`);
  });
}
