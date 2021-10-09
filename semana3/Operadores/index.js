/* 

1)

a. false
b. false
c. true
e. boolean

2)

a. undefined
b. undefined
c. 11
d. erro
e. erro
f. erro
*/


// 1.

const idade = prompt('Qual sua idade?')

const idamigo = prompt('Qual idade do seu melhor amigo?')

const valorIdade = Number(idade)
const valorAmigo = Number(idamigo)

console.log("Sua idade é maior do que a do seu melhor amigo?  " )


const diferenca = valorIdade - valorAmigo
console.log('A diferenca de idade é: ',diferenca)



//  2.

const par = prompt('Insira um numero par')

let resultado = Number(par)
resultado = par % 2
console.log('O resto da divisao é :',resultado)  /* Sim,o resto sera 0 porque todos os numeros pares são divisiveis por 2 */
// O resultado sera diferente porque todos os numeros impares terminam em 1

// 3.


let listaDeTarefas = []


listaDeTarefas[0] = prompt("Adicione 1º tarefa para realizar no dia de hoje")
listaDeTarefas[1] = prompt("Adicione 2º tarefa para realizar no dia de hoje")
listaDeTarefas[2] = prompt("Adicione 3º tarefa para realizar no dia de hoje")
console.log(listaDeTarefas)

  let indice = prompt("Qual indice vc ja realizou 0,1 ou 2?")

 let indiceNumber = Number(indice)


 listaDeTarefas.splice(indiceNumber,1)


 console.log(listaDeTarefas)

 //4.


 let nome = prompt("Digite seu nome")
 let email = prompt("Digite seu email")
 
 console.log("O e-mail ",email ,"foi cadastrado com sucesso.Seja  bem vindo ",nome )