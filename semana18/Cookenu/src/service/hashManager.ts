import *as bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export async function hash(
  plainText : string
) : Promise <string>{
const cost: number = Number (process.env.BCRYPT_COST)
const salt: string = await bcrypt.genSalt(cost)
console.log({salt})

const cypherText: string = await bcrypt.hash (plainText)
return cypherText
}

  hash("bananinha").then (result => {console.log (result)
  hash ("bananinha").then (result => {console.log (result) })