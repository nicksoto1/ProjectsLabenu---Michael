import express from "'express"
import {userController} from "../userController"

export const userRouter = express.Router();
const userController = new userController()

userRouter.post("/signup", userController.signup);
userRouter.post("/login");




