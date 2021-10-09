/**************************** IMPORTS ******************************/
import express ,{Express,Request,Response} from "express"
import cors from "cors"
import dotenv from "dotenv"
import { userRouter } from "./controller/routes/userRouter"
// import * as jwt from "jsonwebtoken"
// import * as bcrypt from "bcryptjs"


/**************************** CONFIG ******************************/


dotenv.config()
const app: Express = express()
app.use(express.json())
app.use(cors())
app.use("/user",userRouter)
/**************************** TYPES ******************************/

type AuthenticationData = {
   id: string
}

type User = {
   id: string,
   name: string,
   email: string,
   password: string
}

enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

type Post = {
   id: string,
   photo: string,
   description: string,
   type: POST_TYPES,
   createdAt: Date,
   authorId: string
}

/**************************** SERVICES ******************************/

const generateId = (): string => v4()

function generateToken(
   payload: AuthenticationData
): string {
   return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
         expiresIn: process.env.JWT_EXPIRES_IN
      }
   )
}

function getTokenData(
   token: string
): AuthenticationData {
   const result: any = jwt.verify(
      token,
      process.env.JWT_KEY as string
   )

   return { id: result.id, }
}

const hash = async (
   plainText: string
): Promise<string> => {
   const rounds = Number(process.env.BCRYPT_COST);
   const salt = await bcrypt.genSalt(rounds);
   return bcrypt.hash(plainText, salt)
}

const compare = async (
   plainText: string, cypherText: string
): Promise<boolean> => {
   return bcrypt.compare(plainText, cypherText)
}

/**************************** ENDPOINTS ******************************/




//Login
app.post('/users/login', async (req: Request, res: Response) => {
   try {
   let message = "Success!"
   
   const { email, password } = req.body
   
   if (!email || !password) {
   res.statusCode = 406
   message = '"email" and "password" must be provided'
   throw new Error(message)
   }
   
   const queryResult: any = await connection("labook_users")
   .select("*")
   .where({ email })
   
   if (!queryResult[0]) {
   res.statusCode = 401
   message = "Invalid credentials"
   throw new Error(message)
   }
   
   const user: User = {
   id: queryResult[0].id,
   name: queryResult[0].name,
   email: queryResult[0].email,
   password: queryResult[0].password
   }
   
   const passwordIsCorrect: boolean = await compare(password, user.password)
   
   if (!passwordIsCorrect) {
   res.statusCode = 401
   message = "Invalid credentials"
   throw new Error(message)
   }
   
   const token: string = generateToken({
   id: user.id
   })
   
   res.status(200).send({ message, token })
   
   } catch (error) {
   let message = error.sqlMessage || error.message
   res.statusCode = 400
   
   res.send({ message })
   }
   })




/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})