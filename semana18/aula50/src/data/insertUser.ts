import { connection } from "../index";

export default async function insertUser(
    id: string,
    password: string,
    email: string
) {
    await connection.insert({
        id,
        password,
        email
    }).into('to_do_list_users')
}