// 2. a)
function obterEstatisticas(numeros: number []) {

  const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}
console.log(obterEstatisticas([10,20,3,-4,100]))

// b) numerosOrdenados do tipo number, soma do tipo number, e num do tipo number

// c)
type estatisticas = {
  maior: number,
  menor: number,
  media: number
}

type amostraDeDados = {
  numeros: number[ ],
obterEstatisticas: (numeros: number[]) => estatisticas
}
 const  amostraDeDados = {
   numeros: [21,18,65,44,15,18],
   obterEstatisticas
 }

  

