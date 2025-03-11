import express from "express";
import cors from "cors";

import planetRouter from "./routes/planets/planets.router.ts";

var app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/planets", planetRouter);

export default app;
