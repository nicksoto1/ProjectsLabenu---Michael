import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";

export default async function getUserById(req: Request, res: Response) {
  try {
    //validar entradas da requisição
    //consultar o banco de dados
    const user = await selectUserById(req.params.id)

    //validar saidas do banco
if (!user) {
  res.status(404).send({
    message: "User not found"
  })
}
res.status(200).send({
  message:"Sucess!",
  id: user.id,
  email:user.email
})
    //responder a requisição
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
