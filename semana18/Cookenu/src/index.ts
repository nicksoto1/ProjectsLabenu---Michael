import express, {Express} from 'express'
import knex from "knex";
import cors from 'cors'
import dotenv from "dotenv";
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import{hash} from "./service/hashManager"

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
   }
})

const app= express();
app.use(express.json());
app.use(cors());

//Endpoints Aqui
app.put('/user', createUser )
app.get('user/:id' , getUserById)

app.listen(3003, ()=> {
   console.log('Servidor rodando na porta 3003')
})

