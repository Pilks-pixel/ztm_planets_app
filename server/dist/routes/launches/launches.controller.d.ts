import express from "express";
declare function httpGetAllLaunches(
  req: express.Request,
  res: express.Response,
): void;
declare function httpAddNewLaunch(
  req: express.Request,
  res: express.Response,
): void;
declare function httpAbortLaunch(
  req: express.Request,
  res: express.Response,
): void;
export { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
