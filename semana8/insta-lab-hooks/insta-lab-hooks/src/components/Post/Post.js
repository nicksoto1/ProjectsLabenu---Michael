import React, { useState } from "react";
import {
  PostContainer,
  PostHeader,
  UserPhoto,
  PostPhoto,
  PostFooter,
  CommentContainer,
} from "./styles";

import IconeComContador from "../IconeComContador/IconeComContador";
import SecaoComentario from "../SecaoComentario/SecaoComentario";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";

const Post = (props) => {
  const [curtido, setCurtido] = useState(false); // usado para a lógica de mudança de cor do coração e o aumento/diminuição do número de curtidas
  const [numeroCurtidas, setNumeroCurtidas] = useState(0); // número de curtidas do post. Varia entre 0 e 1. 
  const [comentando, setComentando] = useState(false); // usado para a lógica de abrir ou fechar a caixa de comentário
  const [numeroComentarios, setNumeroComentarios] = useState(0); // número de comentários do post.
  const [comentarios, setComentarios] = useState([]); // responsável por guardar a lista de comentários feitos no post

  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido);
      setNumeroCurtidas(numeroCurtidas - 1);
    } else {
      setCurtido(!curtido);
      setNumeroCurtidas(numeroCurtidas + 1);
    }
  };

  const onClickComentario = () => {
    setComentando(!comentando);
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario];

    setComentarios(listaDeComentarios);
    setComentando(false);
    setNumeroComentarios(numeroComentarios + 1);
  };

  const iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco;

  const caixaDeComentario = comentando ? (
    // Componente com o input e botão de enviar novo comentario. Import dele na linha 5.
    <SecaoComentario enviarComentario={enviarComentario} />
  ) : (
    comentarios.map((comentario) => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      );
    })
  );
  return (
    <PostContainer>
      <PostHeader>
      <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
      <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={"Imagem do post"} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />

      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  );
};

export default Post;
