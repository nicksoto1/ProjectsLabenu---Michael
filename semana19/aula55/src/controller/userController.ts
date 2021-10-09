import { Request, Response } from "express";
import { businessLogin, businessSignup,businessGetProfile } from "../business/userBusiness";
import { getTokenData } from "../business/services/authenticator";


//Import userRouter (login)
export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      const token = await businessLogin(email, password)

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}

//Import userRouter (signup)
export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, nickname, email, password, role } = req.body

      const token = await businessSignup(
         name,
         nickname,
         email,
         password,
         role
      )

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error) {
      res.status(400).send(error.message)
   }
}

//Import userRouter (getProfile)
export const getProfile = async(req:Request, res: Response)=> {

   const verifiedToken = getTokenData (req.headers.authorization as string)
   const id = verifiedToken.id
   
   const profile =  await businessGetProfile(id);

   res.status(200).send({profile: profile})
}