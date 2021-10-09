import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generate } from "../service/idGenerator";


export default async function createUser(
  req: Request, 
  res: Response
  ) {
    try {
      
      if (!req.body.email ||
         req.body.email.indexOf("@") === -1
         ) {
        throw new Error("Email invalido");
      }
      if (!req.body.password || 
        req.body.password.length < 6
        ) {
        throw new Error("Password invalido");
      }
  
      const id:string = generate();
  
      await insertUser(
        id, 
       req.body.email, 
     req.body.password
     );

     const token = generate();


      res.status(200).send("Usuario criado!");
    } catch (error) {
      res.status(400).send({
        message: error.message || error.sqlMessage
      });
    }
  }
