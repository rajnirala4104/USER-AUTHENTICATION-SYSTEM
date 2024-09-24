import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { userRouter } from '../modules/users/user.routes';

const v1Router = Router();

v1Router.use('/user', userRouter);

v1Router.get('/', async (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({
        message: "v1 router",
        status: StatusCodes.OK,
        data: null
    });
})

export { v1Router };
