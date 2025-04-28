import { createServer } from "node:http";
import mongo from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import app from "./app.ts";
import { loadPlanetsData } from "./model/planets.ts";
import mongoose from "mongoose";

var port = process.env.PORT || 8000;
var mongoUrl: string = process.env.MONGO_URL || "";
var server = createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection opened");
});
mongoose.connection.on("error", err => {
  console.error("MongoDB connection error:", err);
});

startServer();

async function startServer() {
  await mongo.connect(mongoUrl);
  await loadPlanetsData();

  server.listen(port, function () {
    console.log(`Server listening on port ${port}`);
  });
}
