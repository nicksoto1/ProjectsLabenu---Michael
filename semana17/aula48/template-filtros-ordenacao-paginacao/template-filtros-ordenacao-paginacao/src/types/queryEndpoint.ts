import {connection} from ".."
import {searchRecipeInput} from "../types/searchRecipeInput"
import { Request, Response } from "express";


export default async function selectAllUsers(userName: string):Promise<any> {



 const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
     WHERE name LIKE "${userName}";
   `)

   return result[0]
}