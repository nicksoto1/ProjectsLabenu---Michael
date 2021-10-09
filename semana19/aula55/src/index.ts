import express from 'express'
import cors from 'cors'
import {useRouter} from "./controller/routes/userRouter"

// import { signup, login } from './controller/userController'
// import { createTask,getTaskById } from './controller/taskController'

const app = express()
app.use(express.json())
app.use(cors())





app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})