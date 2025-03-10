import express from "express";

import planetRouter from "./routes/planets/planets.router.ts";

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/planets", planetRouter);

export default app;
