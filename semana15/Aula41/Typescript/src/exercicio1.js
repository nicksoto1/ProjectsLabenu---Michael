// 1. a) Com aspas o codigo entende que é uma string
//Sem aspas o codigo não roda por se tratar de um numero
var minhaString = "333";
console.log(minhaString);
// b)
var meuNumero = 333;
console.log(meuNumero);
// d)
var pessoa1 = {
    nome: "Michael Soto",
    idade: 27,
    corFavorita: "preto"
};
var pessoa2 = {
    nome: "Alex",
    idade: 30,
    corFavorita: "verde"
};
var pessoa3 = {
    nome: "Douglas",
    idade: 17,
    corFavorita: "azul"
};
console.log(pessoa1, pessoa2, pessoa3);
// e)
var corArcoIris;
(function (corArcoIris) {
    corArcoIris["cor1"] = "rosa";
    corArcoIris["cor2"] = "azul";
    corArcoIris["cor3"] = "verde";
})(corArcoIris || (corArcoIris = {}));
var amanda = {
    "class": corArcoIris.cor3
};
console.log("Cor :", amanda);
