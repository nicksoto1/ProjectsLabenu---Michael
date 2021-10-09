//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import { error } from "console";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60,
  },
];

// Exercício 1
// a) GET
// b) /user
app.get("/user", (req: Request, res: Response) => {
  //codigo para buscar todos os úsuarios
  try {
    const result = users;
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Exercício 2
// a)queryparams para busca dentro de um mesmo conjunto como em busca de um nome
// b)sim,o uso do find faz a busca dentro do array todos os types que foi digitado caso não encontre a condição if informa que o usuario não foi encontrado
//codigo para buscar todos os úsuarios que tenha um type especifico
app.get("/user", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const type: string = req.query.type as string;

    if (!type) {
      errorCode = 422;
      throw new Error("Type invalido. Escreva novamente");
    }

    const myType = users.find((u: user) => u.type === type);
    if (!myType) {
      errorCode = 404;
      throw new Error("Usuario não encontrado");
    }
    const result = myType;
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});

// Exercício 3
// a)GET

//codigo para buscar um usuario pelo nome
app.get("/user", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const nome: string = req.query.nome as string;

    if (!nome) {
      errorCode = 422;
      throw new Error("Nome invalido. Escreva novamente");
    }

    const myUser = users.find((u: user) => u.name === nome);
    if (!myUser) {
        // b)
      errorCode = 404;
      throw new Error("Usuario não encontrado");
    }
    const result = myUser;
    res.status(200).send(result);
  } catch (error) {
    res.status(errorCode).send(error.message);
  }
});


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Exercício 4
// a)
// b)

// Exercício 5
// a)
// b)

// Exercício 6
// a)
// b)

// Exercício 7
// a)
// b)