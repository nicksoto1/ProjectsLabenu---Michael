
function criarTarefa() {
let selecao = document.getElementById('dias-semana').value //select
let tarefa = document.getElementById('tarefa').value //input

document.getElementById(selecao).innerHTML += '<p> ' + tarefa + '</p>'
document.getElementById('tarefa').value = ""
document.getElementById("dias-semana") = 'segunda' //entender o conceito


}