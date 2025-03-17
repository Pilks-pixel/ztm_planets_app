import express from "express";
import cors from "cors";
import path from "node:path";
import morgan from "morgan";

import planetRouter from "./routes/planets/planets.router.ts";

var app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(import.meta.dirname, "..", "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(import.meta.dirname, "..", "public", "index.html"));
});

app.use("/planets", planetRouter);

export default app;
