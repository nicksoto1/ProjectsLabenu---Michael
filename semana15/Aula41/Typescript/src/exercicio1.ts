// 1. a) Com aspas o codigo entende que é uma string
//Sem aspas o codigo não roda por se tratar de um numero
const minhaString: string = "333"
console.log(minhaString)

// b)
const meuNumero: number  | string= 333
console.log(meuNumero)

// c)
type pessoa =  {nome: string, idade: number, corFavorita: string} 

// d)
const pessoa1 = {
  nome: "Michael Soto",
  idade:27,
  corFavorita: "preto"
}
const pessoa2 = {
  nome: "Alex",
  idade:30,
  corFavorita: "verde"
}
const pessoa3 = {
  nome: "Douglas",
  idade:17,
  corFavorita: "azul"
}
console.log(pessoa1,pessoa2,pessoa3)

// e) 
enum corArcoIris{
cor1 = "rosa",
cor2 = "azul",
cor3 = "verde"
}

type pegarCor= {
  cor: corArcoIris
}
const  novoArcoIris: pegarCor = {
  cor: corArcoIris.cor3
}
console.log("Cor :", novoArcoIris)

