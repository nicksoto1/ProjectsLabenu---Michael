/* 

1.
Criou duas variaveis respostaDoUsuario e numero
respostaDoUsuario recebe o valor do prompt digitado pelo usuario
numero transforma a variavel respostaDoUsuario para numero
Condição se numero divsivel por 2 tiver o resto da divisão igual 0  então rode a mensagem do console(Dizemos que numero  divisivel por 2)
Senão se numero não tiver resto 0 como divisão rode a mensagem do console(Dizemos que numero não é divisivel por 2)

2.
a Executa 5 condições para o usuario escolher uma fruta:laranja,maçã,uva,pera ou default(qualquer outra fruta)
Dependendo dessas 5 condições que digite o usuario tera cada resposta diferente para aquela fruta que digitou
Ate que finalmente uma mensagem sera imprimida dizendo o preço da fruta e nome da fruta que foi digitado

b O preço da fruta  maçã  é  R$  2,25

c O preço da pera em vez de ser definido como 5.5 vair ficar com o resultado da outra condição default quer sera 5


3.
a crie uma variavel numero,digite o primeiro numero pelo usuario e o transforme em numero
b Esse numero passou no teste
Erro

Erro

c Sim,dentro do escopo if a uma variavel chamada mensagem que não vai rodar porque esta dentro do bloco
Caso estivesse junto com o console rodaria 2 mensagems se numero > 0:uma da condição if e a outra a propria variavel mensagem
Caso estivesse fora do escopo if e a condição if for falsa rodaria apaneas a mensagem


*/

// 4.

const idade = Number(prompt('Digite sua idade'))

if(idade >=18){
  console.log('Voce pode dirigir')
}else{
  console.log('Apenas maiores de idade')  
}

// 5.

const turno = prompt('Qual turno vc estuda')

if(turno === 'M'){
  console.log('Matutino')
}else if(turno === 'V'){
console.log('Vespertino')
}else if(turno === 'N'){
  console.log('Noturno')
}else{
  console.log('Indefinido')
}


// 6.

const turno = prompt('Qual turno vc estuda?')

switch(turno){
  case 'M':
    console.log('Matutino')
    break
    case 'V':
      console.log('Vespertino')
      break
      case 'N':
        console.log('Noturno')
        break
        default:
        console.log('Indefinido')
}

// 7.

const genero = prompt('Qual genero do filme vc vai assistir?')
const preco =  Number(prompt('Qual preço do ingresso do filme'))


if(genero === 'fantasia'  && preco >= 15){
  console.log('Bom filme!')
}else{
  console.log('Escolha outro filme')
}









