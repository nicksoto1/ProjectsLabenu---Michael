// INTERPRETAÇÃO DE CÓDIGOS
// 1.

//  Crie uma função com um valor(parametro)
//  Crie uma const  cotacao que digite um valor e o transforme em um numero
//  Retorne o valor do parametro * constante que foi digitada
//  Crie uma const meuDinheiro que armazene a função e a execute
//  Imprima no console a constante meuDinheiro

// 100 * (Numero que foi digitado pelo usuario) Ex >>> 100 * (10) = 100

// 2.
// Crie uma funcao com 2 valores(parametro)
//  Crie uma let valorAposInvestimento
//  Crie uma switch com let valorAposInvestimento armazenado
//  Crie 4 case e caso seja uma delas execute seu determinado comando e pause-o
//   Crie um default ,caso não seja definido nenhum case execute-o e pause-o
//  Retorne o let valorAposInvestimento
//   Crie uma const novoMutante que armazene a função e a execute
//   Crie uma const segundoMontante que armazene a função e a execute
//  Imprima no console a const novoMutante e segundoMontante

// 165
// Alert >>> TIPO DE INVESTIMETO INFORMADO INCORRETO

// 3.//  Crie uma const numeros e armazene varios array dentro dele
//  Crie uma const arra1 vazia
//  Crie uma const array2 vazia
//  Crie um for of e aplique uma condição: caso seja true execute o comando senão execute outro comando
//  Imprima a quantidade de  array dentro da const numeros
//  Imprima a quantida de array dentro da const: array1 e array2

// Quantidade total de números, 14
// 6
// 8

// 4.
//  Crie uma const numeros e armazene varios array dentro dele
//  Crie uma let numero1 com valor Infinity
//  Crie uma let numero2 com valor 0
//  Crie um for of e aplique uma condição: caso seja true execute o comando,aplique outra condição caso seja esse execute-o
//  Imprima a let numero1 e numero2

// 25,12,55,64,121,44,11,84,51,48,14,73,111,283,1,99,13,31,83,131,1,1.1,-10,25
//  25,12,55,64,121,44,11,84,51,48,14,73,111,283,1,99,13,31,83,131,1,1.1,25

// LOGICA DE PROGRAMAÇÃO
// 1.
// const array = [1,2,3,4,5]
// console.log( array)

// const listas = [3, 4, 89, 56, 31, 48, 1, 100]
// for (let lista of listas) {
//     console.log(lista)
// }

//   const nota = [3, 4, 89, 56, 31, 48, 1, 100]
//   i=0
//   while( i< nota.length ) {
// console.log(nota[i])
//     i++
//   }

// 2.
// a) false
// b) false
// c)  true
// d) true
// e)  true

// 3.

// let i = 0
// let soma =0
// const num = Number(prompt("Digite um número inteiro: "))

// while(i < num) {
//  console.log(soma)
//  soma += 2
//   i++
// }

// 4.

// function triangulo(a, b, c) {
//   const valortriangulo = prompt('Digite o 1º valor do triangulo')
//   const valortriangulo2 = prompt('Digite o 2º valor do triangulo')
//   const valortriangulo3 = prompt('Digite o 3º valor do triangulo')

//   if (valortriangulo === valortriangulo2 && valortriangulo2 === valortriangulo3) {
//     console.log('O triangulo é equilatero')
//   } else if (valortriangulo != valortriangulo2 && valortriangulo2 != valortriangulo3 && valortriangulo3 != valortriangulo) {
//     console.log('O triangulo é isosceles')
//   } else {
//     console.log('O triangulo é escaleno')
//   }
// }

// console.log(triangulo(3, 3, 3))

// 5.

//   const numero = 15
//   const numero2 = 30
//   if(numero > numero2){

//     console.log('O maior é: ',numero)
//   }else{
//     console.log('O maior é: ',numero2)
//   }

//   const valor = 15
//   const valor2 = 30
//   if(valor2 % valor === 0){
//     console.log(valor + ' não é divisivel por ' + valor2)
//     console.log(valor2 + '  é divisivel por ' + valor)
//   }else{
//     console.log(valor + '  é divisivel por ' + valor2)
//     console.log(valor2 + ' não  é divisivel por ' + valor)
//   }
// console.log('A diferença entre eles é:',valor2 - valor)

// FUNÇÕES
// 1.

// const numeros = [0,1,2,3,4,5,6,7,8,9,10]
// var text = " ";
// let i
// for(i=0; i < numeros.length; i++){
//   console.log(numeros)
//   break

// }

// text += numeros[i] ;
//   const pegar = numeros.splice("")
//   console.log(text)

// 2.
// function valor(){
// alert("Hello World")

// }

// console.log(valor())

// Exercicio de Obejtos

// 1.
// Array é uma matriz que pode armazenar varios valores em uma unica variavel, voce pode acessar esses valores a qualquer momento do seu codigo consultando o numero de indices
// Objetos é uma entidade com propriedades e tipos como se fosse um objeto da vida real,voce pode definir o objeto como nome de carro por exemplo atribuindo uma propriedade como modelo e seu tipo como ford

// 2.
// function retangulo(lado1,lado2){
//   const largura = lado1
//   const altura = lado2
//   const perimetro = 2*(lado1+lado2)
//   const area = lado1*lado2
//     console.log(`Largura: ${largura}\nAltura: ${altura}\nPerimetro: ${perimetro}\nArea: ${area}`)
// }
// retangulo(3,4)

// 3.
// const filme = {
//   titulo: "O senhor dos aneis",
//   ano: 2014,
//   diretor: "Sthepen Close",
//   elenco: ["Matheus", "Atlas", "Savitar"],
// };

// console.log(
//   `Venha assistir ao filme \n${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.elenco}`
// );

// 4.
// function anominizarPesoa (){
//   const usuario = {
//   nome:'Jose',
//   idade: 24,
//   email: 'jose@gmail.com',
//   endereço:'Rua Jatoba 203'
//   }
//   const novoUsuario = {
//     ...usuario,
//     nome:"Anonimo"

//   }
//  console.log(novoUsuario)
// }

// anominizarPesoa()

// Funções de Array
// 1.a
// const pessoa = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 }
// ]
// const pessoasAdultas = pessoa.filter((elemento,index,pessoa) => {
// if(elemento.idade >= 20){
//   return true
// }
// return false
// })

// console.log(pessoasAdultas)

// b.
// const pessoa2 = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 }
// ]
// const criancas = pessoa2.filter((elemento,index,pessoa2) => {
// if(elemento.idade <= 20){
//   return true
// }
// return false
// })
// console.log(criancas)

// 2.a

// function multiDois(){
// const array = [1, 2, 3, 4, 5, 6]
// const numeros = array.map((elemento,index,array)=>{
//   return ` ${elemento*2}`
// })
// console.log(numeros)
// }
// console.log(multiDois())

// b.

// function multiTres(){
// const array = [1, 2, 3, 4, 5, 6]
// const numeros = array.map((elemento,index,array)=>{
//   return ` ${elemento*3}`
// })
// console.log(numeros)
// }
// console.log(multiTres())

// c.

// function numerosPareImpar() {
//   const array = [1, 2, 3, 4, 5, 6];
//   const numeros = array.map((elemento, index, array) => {
//     if (elemento % 2 === 0) {
//       console.log(` ${elemento}, é par`);
//     } else {
//       console.log(` ${elemento}, é impar`);
//     }
//   });
// }
// console.log(numerosPareImpar());

// 3.a

// function regrasParquinho() {
//   const pessoas = [
//         { nome: "Paula", idade: 12, altura: 1.8 },
//         { nome: "João", idade: 20, altura: 1.3 },
//         { nome: "Pedro", idade: 15, altura: 1.9 },
//         { nome: "Luciano", idade: 22, altura: 1.8 },
//         { nome: "Artur", idade: 10, altura: 1.2 },
//         { nome: "Soter", idade: 70, altura: 1.9 },
//       ];
//   const numeros = pessoas.filter((elemento, index, pessoas) => {
//     if ( elemento.altura >= 1.5 && elemento.idade >= 14 && elemento.idade <= 60) {
//   console.log(elemento)

//     }
//   });
// }
// regrasParquinho()

// b.

// function regrasParquinho() {
//   const pessoas = [
//         { nome: "Paula", idade: 12, altura: 1.8 },
//         { nome: "João", idade: 20, altura: 1.3 },
//         { nome: "Pedro", idade: 15, altura: 1.9 },
//         { nome: "Luciano", idade: 22, altura: 1.8 },
//         { nome: "Artur", idade: 10, altura: 1.2 },
//         { nome: "Soter", idade: 70, altura: 1.9 },
//       ];
//   const numeros = pessoas.filter((elemento, index, pessoas) => {
//     if ( elemento.altura >= 1.5 && elemento.idade >= 14 && elemento.idade <= 60) {
//   return true
//     } else{
//       console.log(elemento)
//     }
//   });
// }
// regrasParquinho()

// 4.
// const consultas = [
//   {
//     nome: "João",
//     genero: "masculino",
//     cancelada: true,
//     dataDaConsulta: "01/10/2019",
//   },
//   {
//     nome: "Pedro",
//     genero: "masculino",
//     cancelada: false,
//     dataDaConsulta: "02/10/2019",
//   },
//   {
//     nome: "Paula",
//     genero: "feminino",
//     cancelada: true,
//     dataDaConsulta: "03/11/2019",
//   },
//   {
//     nome: "Márcia",
//     genero: "feminino",
//     cancelada: false,
//     dataDaConsulta: "04/11/2019",
//   },
// ];

// const mostrar = consultas.forEach((elemento, index, consultas) => {
//   if (elemento.cancelada === true && elemento.genero === "masculino") {
//     console.log(`Olá, Sr. ${elemento.nome}. Estamos enviando esta mensagem para lembrá-lo
//   da sua consulta no dia ${elemento.dataDaConsulta}. Por favor, acuse
//  o recebimento deste e-mail.`);
//   } else if (elemento.cancelada === false && elemento.genero === "feminino") {
//     console.log(`Olá, Sra. ${elemento.nome}. Estamos enviando esta mensagem para lembrá-la
//   da sua consulta no dia ${elemento.dataDaConsulta}. Por favor, acuse
//  o recebimento deste e-mail.`);
//   } else if (elemento.cancelada === false && elemento.genero === "masculino") {
//     console.log(`Olá,Sr. ${elemento.nome}. Infelizmente, sua consulta marcada
//   para o dia ${elemento.dataDaConsulta} foi cancelada. Se quiser, pode entrar em
//   contato conosco para remarcá-la`);
//   } else  {
//     console.log(`Olá,Sra. ${elemento.nome}. Infelizmente, sua consulta marcada
//   para o dia ${elemento.dataDaConsulta} foi cancelada. Se quiser, pode entrar em
//   contato conosco para remarcá-la`);
//   }
// });

// 5;
// INCOMPLETO
// const contas = [
//   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
//   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
//   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
//   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
//   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
//   { cliente: "Soter", saldoTotal: 1200, compras: [] },
// ];
// const soma = contas.forEach((cliente, index, contas) => {
//   let soma = soma + 300;
//   for (let compra of contas) {
//   }

//   cliente.saldoTotal -= soma;
//   for (let i = 0; i < cliente.saldoTotal.length; i++) {
//     soma += cliente.saldoTotal[i];
//   }
//   console.log(soma);
// });
