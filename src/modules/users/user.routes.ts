import { Router } from "express";
import { userControllers } from "./user.controllers";

const userRouter = Router();

userRouter.post('/registration', userControllers.registration);
userRouter.post('/login', userControllers.login);
userRouter.put('/update/:id', userControllers.updateUserInfo);
userRouter.delete('/delete', userControllers.deleteUser);

export { userRouter };
