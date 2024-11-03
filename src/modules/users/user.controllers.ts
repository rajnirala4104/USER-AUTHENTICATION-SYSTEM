import { Request, Response } from "express";

export const userControllers = {
    async registration(req: Request, res: Response) {
        // step-1 get the name, email, password from the request body.
        // step-2 check the null values, if name, email is null.
        // step-3 check if the email is already registered.
        // step-4 get the profilePic from request file.
        // step-5 check if the profilePic is null.
        // step-6 store the profilePic in cloudinary and get the url.
        // step-7 hash the password
        // step-8 create an object of user.
        // step-9 save the user in the database.
        // step-10 do dance.
    },
    async login(req: Request, res: Response) {
        // step-1 get the email and password from the request body.
        // step-2 check the null values.
        // step-3 check if the email is registered.
        // step-4 check the password.
        // step-5 generate an access token.
        // step-6 generate a refresh token.
        // step-7 store the refresh token in the database.
        // step-8 do dance.
    },
    async updateUserInfo(req: Request, res: Response) { },
    async deleteUser(req: Request, res: Response) { }
}