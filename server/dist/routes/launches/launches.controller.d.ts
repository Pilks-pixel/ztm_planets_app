import { Request, Response } from "express";
declare function httpGetAllLaunches(req: Request, res: Response): void;
declare function httpAddNewLaunch(req: Request, res: Response): void;
declare function httpAbortLaunch(req: Request, res: Response): void;
export { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch };
