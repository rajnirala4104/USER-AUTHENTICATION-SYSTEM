import { Router } from "express";
import { upload } from "../../middlewares/multer";
import { userControllers } from "./user.controllers";

const userRouter = Router();

userRouter.post('/registration', upload.single('profilePic'), userControllers.registration);
userRouter.post('/login', userControllers.login);
userRouter.put('/update/:id', userControllers.updateUserInfo);
userRouter.delete('/delete', userControllers.deleteUser);

export { userRouter };
