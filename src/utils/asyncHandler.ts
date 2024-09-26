import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
export const asyncHandler = (requestHandler: Function) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await requestHandler(req, res, next);
    } catch (error: any) {
        res.status(error.code || StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: error.message,
        });
    }
};