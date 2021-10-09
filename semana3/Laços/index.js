// 1. Exercícios de interpretação de código

// 10

// 2. a.

// 19
// 21
// 23
// 25
// 27
// 30

// b  .



// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let numbers = ""

// for (let numero of lista) {
//     numbers = numbers + " " + numero
//     }

//     console.log(numbers)

// // OU 

//     const listas = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]


// for (let lista of listas) {
//     console.log(lista)
//     }

// 3. a. Exercícios de escrita de código

const valores = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

console.log(valores)

// b.

const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


for (let valor of numeros) {

    console.log(valor / 10)
}


// c.

const numeros2 = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let valor of numeros2) {

    if (valor % 2 === 0) {

        console.log(valor)
    }

}


// d.

const elementos = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let contador = 0


for (let index of elementos) {


    console.log('O elemento do índex ' + contador + ' é : ' + index)
    contador++
}



// e. 

const elementos = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]



let maiorNumero = elementos[0]
let menorNumero = elementos[0]


for (let indexDoArray = 0; indexDoArray < elementos.length; indexDoArray++) {
    let elemento = elementos[indexDoArray]

    if (maiorNumero < elemento) {
        maiorNumero = elemento

    } else if (menorNumero > elemento) {
        menorNumero = elemento
    }

}

console.log('O numero maior é: ' + maiorNumero + ' e o menor é ' + menorNumero)

// console.log(maiorNumero)
// console.log(menorNumero)