import { Request, Response } from "express";
import { addUser } from "../data/databaseCreater"

export const createUser = async (req: Request, res: Response) => {
  try{
    const {name,email,password} = req.body

    if(!req.body.name){throw new Error("Please indicate name")}
    if(!req.body.email){throw new Error("Please indicate email")}
    if(!req.body.password){throw new Error("Please indicate password")}

await addUser(name,email,password)

res.status(200).send("User created successfully")
  }catch(error) {
    res.send(error.message)
  }
}