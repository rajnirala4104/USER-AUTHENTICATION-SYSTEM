import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CORS_ORIGIN, EXPRESS_RATE_LIMIT } from "./constants";
import { connectDB } from "./database/connectDB";
import { apiRouter } from "./routes";

const app: Application = express();
connectDB();

// express middlewares
app.use(cors({ origin: CORS_ORIGIN, credentials: true }));
app.use(express.json({ limit: EXPRESS_RATE_LIMIT })); // limit helps to manage the rate of requests to a server in Express.js applications
app.use(express.urlencoded({ limit: EXPRESS_RATE_LIMIT, extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// routes
app.use("/api", apiRouter);

app.get("/", (req: Request, res: Response) => {
   res.status(StatusCodes.OK).json({
      message: "Api is running successfully",
      status: StatusCodes.OK,
   });
});

export { app };
