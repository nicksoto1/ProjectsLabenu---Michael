import {Request,Response} from 'express'
import insertUser from '../data/insertUser'

export default async function  createUser(
  req:Request,
  res:Response
){
  try{

    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.password 
     ) {  
res
.status(400)
.send('Fill in the "name", "email" and "password fields" ')
     }
//consultar o banco de dados
const id: string = Date.now() + Math.random().toString()

await insertUser(
id,
req.body.name,
req.body.email,
req.body.password
)

res.status(200).send('User created successfully ')
//validar saidas do banco
//responder a requisição
  } catch(error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}