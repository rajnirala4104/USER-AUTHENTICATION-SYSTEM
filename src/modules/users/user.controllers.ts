import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { RegistrationRequestInterface } from "../../types";
import { ApiError } from "../../utils/apiError";
import { ApiResponse } from "../../utils/apiRresponse";
import { uploadOnCloudinary } from "../../utils/cloudinary";
import { UserModel } from "./user.model";

export const userControllers = {
    async registration(req: Request, res: Response) {
        // step-1 get the name, email, password from the request body.
        // step-2 check the null values, if name, email is null.
        // step-3 check if the email is already registered.
        // step-4 get the profilePic from request file.
        // step-5 check if the profilePic is null.
        // step-6 store the profilePic in cloudinary and get the url.
        // step-7 create an object of user.
        // step-8 save the user in the database.
        // step-9 do dance.

        //step-1 
        const { name, email, password }: RegistrationRequestInterface = req.body;

        // step-2
        if (!name || !email || !password) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "All fields are required");
        }

        // step-3
        const user = await UserModel.findOne({ email });
        if (user) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Email already registered");
        }

        // step-4
        const profilePicLocalPath = req.file?.path;


        // step-5
        if (!profilePicLocalPath) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Profile picture is required");
        }

        // step-6 - there is a BUG in uploadOnCloudinary
        const profilePicCloudinaryResponse = await uploadOnCloudinary(profilePicLocalPath);
        console.log(profilePicCloudinaryResponse);

        // step-8
        const userObject = {
            name, email, password, profileImage: profilePicCloudinaryResponse
        }

        // step-9
        const createdUser = await UserModel.create(userObject);

        if (!createdUser) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "User creation failed");
        }

        const finalUser = await UserModel.findById(createdUser._id);

        // step-10
        return res.status(StatusCodes.CREATED).json(
            new ApiResponse(StatusCodes.CREATED, finalUser, "user created successfully")
        )

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