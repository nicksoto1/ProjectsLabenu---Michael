import { Request, Response } from "express";
import { getUserByEmail } from "../data/getUserByEmail";
import { generateToken } from "../service/authenticator";


export default async function login(req: Request, res: Response) {

  try {

    const input: loginInput = {
        email: req.body.email,
        password: req.body.password
    }

    if(!input.email || !input.password){
        throw new Error("Por favor preencha todos os campos");
    }

    const user = await getUserByEmail(input.email);

    if(!user){
        throw new Error("Usuario não encontrado!");
    }

    if(user.password !== input.password){
        throw new Error("Senha Incorreta.");
    }

    const token = generateToken(user.id);
    res.status(200).send({token});
    
} catch (error) {
    res.status(400).send({message: error.message});
}


}

export type loginInput = {
email: string,
password: string
}