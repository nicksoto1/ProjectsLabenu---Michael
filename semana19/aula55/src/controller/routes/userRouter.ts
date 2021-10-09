import express from "express"
import { signup, login, getProfile } from "../userController";

export const taskRouter = express.Router()

userRouter.post("/signup", signup)
userRouter.post("/user/login", login)


// app.post('/user/signup', signup)
// app.post('/user/login', login)