import { task } from "./task"

export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type user = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES,
   tasks?: task[]
}

export type signupInputDTO = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: string
}

export  class User {
   //Como se ja tivesse um getter mas o setter não existe(não tem como alterar)
   public readonly id: string
   public name: string
   public nickname: string
   public email: string
   public password: string
   public role: USER_ROLES 
   private tasks?: task[ ] 

   constructor(
      id: string,
      nome: string,
      apelido: string,
      email: string,
      senha: string,
      papel: USER_ROLES = USER_ROLES.NORMAL,
      tarefas: task[] = [ ]
   ){
this.id = id
this.name = nome
this.nickname = apelido 
this.email = email
this.password = senha
this.role = papel
this.tasks =  tarefas
   }
   public getTasks = () => this.tasks

   public addTask = (task:task): void =>{
      this.tasks?.push()
   }
}



const user = new User(
   "id",
   "nome",
   "apelido",
"email@email.com",
"bananinha",
USER_ROLES.ADMIN
)

user.id = "outroId"
