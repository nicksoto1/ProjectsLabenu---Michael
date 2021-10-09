const bemvindo = alert('Bem vindo ao jogo de Backjack!')

const confirmar = confirm('Quer iniciar uma nova rodada?')







const nipes = ['♣', '♠', '♥', '♦']
// const valor = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
const valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]





const i = 0

while (confirmar === true && i === 0) {




    // Usuario 
    const nipe = nipes[Math.floor(Math.random() * 4)]
    const face = valor[Math.floor(Math.random() * valor.length)]

    const nipe2 = nipes[Math.floor(Math.random() * 4)]
    const face2 = valor[Math.floor(Math.random() * valor.length)]

    // Computador
    const nipecomputador = nipes[Math.floor(Math.random() * 4)]
    const facecomputador = valor[Math.floor(Math.random() * valor.length)]

    const nipecomputador2 = nipes[Math.floor(Math.random() * 4)]
    const facecomputador2 = valor[Math.floor(Math.random() * valor.length)]

    // Soma dos Valores
    const soma1 = face + face2
    console.log(`Usuário - cartas: ${face}${nipe} e  ${face2}${nipe2} - `,
        soma1)


    const soma2 = facecomputador + facecomputador2
    console.log(`Computador - cartas: ${facecomputador}${nipecomputador} e  ${facecomputador2}${nipecomputador2} - `,
        soma2)


    // Condição
    if (soma1 > soma2) {
        console.log('O usuario ganhou')

    } else if (soma1 < soma2) {
        console.log('O computador ganhou')
    } else {
        ('Empate!')

    }
    i = 1

}


console.log('O jogo acabou')