import { baseDatabase } from "./baseDatabase";
import { User } from "../business/entities/user";

export class userDatabase extends baseDatabase {
  async insertUser(user: User) {
    try {
      await  this.connection("labook_users").insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
      
    }
  }
}
