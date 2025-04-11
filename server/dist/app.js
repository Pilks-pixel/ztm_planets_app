import express from "express";
import cors from "cors";
import path from "node:path";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import planetRouter from "./routes/planets/planets.router.js";
import launchesRouter from "./routes/launches/launches.router.js";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(join(__dirname, "..", "public")));
app.use("/planets", planetRouter);
app.use("/launches", launchesRouter);
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
export default app;
