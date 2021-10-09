import express, {Express} from 'express'
import createUser from  './endpoints/createUser'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";
import {generate} from "./service/idGenerator";
import { login } from './endpoints/login'
import getUserById from './endpoints/getUserById'


dotenv.config();


export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306
    }
})

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/:id', getUserById)




app.listen(3000, ()=>{
  console.log('Servidor rodando na porta 3000')
})