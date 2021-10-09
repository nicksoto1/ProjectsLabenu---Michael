import { connection } from "..";

export const addUser = async(name: string, email: string, password:string): Promise<any> =>{
await connection.raw(`
     insert into user values(
       ${Date.now()},
      "${name}",
      "${email}",
      "${password}",
      null
      )
     `)}