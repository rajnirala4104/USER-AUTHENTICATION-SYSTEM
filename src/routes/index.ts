import { Router } from "express";
import { v1Router } from "./v1Router";

export const apiRouter = Router();

apiRouter.use('/v1', v1Router);
