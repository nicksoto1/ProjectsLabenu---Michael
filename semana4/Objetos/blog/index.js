let arrayPosts = [];

function cliqueAqui() {  /* Adiciona valor no console */
  const mostrartitulo = document.getElementById("titulo-post")
const mostrarautor = document.getElementById("autor-post")
const mostrarconteudo = document.getElementById("conteudo-post")

  const mostrar = {
    titulo: mostrartitulo.value,
    autor: mostrarautor.value,
    conteudo: mostrarconteudo.value,
  };

  arrayPosts.push(mostrar);
  // Apaga o conteudo que foi digitado
  mostrartitulo.value = ""; 
  mostrarautor.value = "";
  mostrarconteudo.value = "";

  console.log(mostrar)
  inserirPost(); /* Chama a função inserirPosts */
}



function inserirPost() { /* Prepara todos os elmentos do console em um array   */
  const container = document.getElementById("container-de-posts")
  container.innerHTML = ""
  for (let item of arrayPosts) {
      container.innerHTML += criaPost(item) /* Chama a funcao criaPost */
  }
}

function criaPost(itemPost) {   /* Adiciona valor embaixo do Criar Post  */
  return "<div class='post-individual'>" +
      "<p>" + "Titulo: " + itemPost.titulo + "</p>" +
      "<p>" + "Autor: " + itemPost.autor + "</p>" +
      "<p>" + "Conteudo: " + itemPost.titulo + "</p>" +
      "<hr>" 
      "</div>"
}



//  console.log('Titulo:', mostrartitulo)
//  console.log('Autor:', mostrarautor)
//  console.log('Conteudo:', mostrarconteudo)
//  console.log('')

//  arrayPosts.push(mostrartitulo)
//  arrayPosts.push(mostrarautor)
//  arrayPosts.push(mostrarconteudo)

//  mostrartitulo.value = ""
// mostrarautor.value = ""
// mostrarconteudo.value = ""

// inserirPosts()
// }