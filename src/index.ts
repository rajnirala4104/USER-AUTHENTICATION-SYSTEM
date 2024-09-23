import express, { Application, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app: Application = express();
const port: Number = 8000;

app.get('/', async (req: Request, res: Response) => {
      return res.status(StatusCodes.OK).json({
            message: "api is running successfully for emergency",
            status: StatusCodes.OK,
            data: null
      })
})

app.listen(port, () => {
      console.log("server is running... at 8000")
})
