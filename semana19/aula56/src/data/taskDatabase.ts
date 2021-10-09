import { connection } from "./connection";
import { task } from "../business/entities/task";
import { toTaskModel } from "./model/taskModel";

export class TaskDatabase {

   tableName = 'to_do_list_tasks'

   createTask = async (
      task: task
   ) => {
      await connection(this.tableName)
         .insert({
            id: task.id,
            title: task.title,
            description: task.description,
            deadline: task.deadline,
            author_id: task.authorId
         })
   }

   getTaskById = async (
      id: string
   ): Promise<any> => {
      const result = await connection.raw(`
           SELECT tasks.*, nickname FROM ${this.tableName} AS tasks
           JOIN to_do_list_users AS users
           ON author_id = users.id
           WHERE tasks.id = '${id}';
       `)

      return result[0][0]
   }

   getTaskByUserId = async (
      id: string
   ): Promise<task[]> => {

      const result = await connection.raw(`
           SELECT * FROM ${this.tableName}
           WHERE author_id = '${id}';
       `)
      const tasks: task[] = [];

      for (let task of result[0]) {
         tasks.push(toTaskModel(task));
      }

      return tasks;
   }
}



// export const selectTaskByUserId = async (
//    id: string
// ): Promise<task[]> => {

//    const result = await connection.raw(`
//         SELECT * FROM to_do_list_tasks
//         WHERE author_id = '${id}';
//     `)
//    const tasks: task[] = [];

//    for(let task of result[0]){
//       tasks.push(toTaskModel(task));
//    }
    
//    return tasks;
// }



// export const selectTaskById = async (
//    id: string
// ): Promise<any> => {
//    const result = await connection.raw(`
//         SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
//         JOIN to_do_list_users AS users
//         ON author_id = users.id
//         WHERE tasks.id = '${id}';
//     `)

//    return result[0][0]
// }




// export const insertTask = async (
//    task: task
// ) => {
//    await connection('to_do_list_tasks')
//       .insert({
//          id: task.id,
//          title: task.title,
//          description: task.description,
//          deadline: task.deadline,
//          author_id: task.authorId
//       })
// }