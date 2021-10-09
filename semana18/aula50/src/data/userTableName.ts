const userTableName = "User";
import { connection } from "../index";

	 const createUser = async (
		id: string, 
		email: string, 
		password: string) => {
	  await connection.insert({
	      id,
	      email,
	      password,
	    })
	    .into(userTableName);
	};