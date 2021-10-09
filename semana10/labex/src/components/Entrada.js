import React from 'react';
import styled from 'styled-components';


export const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
align-content:flex-end;
margin-top:17rem;

  
`;

export const Caixa1 = styled.button`
 background-color:#14213D;
 padding:1rem;
 width:10rem;
`;

export const Caixa2 = styled.button`
 background-color:#14213D;
 padding:1rem;
 width:10rem;
`;
export const Imagem = styled.img`
width: 2rem;
height:2rem;
`


function Entrada() {
  return(
    <Container>
      {/* <img src="https://thumbs.dreamstime.com/b/rocket-icon-symbol-qualidade-superior-elemento-isolado-da-nave-espacial-no-estilo-na-moda-97053990.jpg" />   */}
<Caixa1>
 Publica
</Caixa1>

<Caixa2>
  Privada
</Caixa2>



    </Container> 




  )

}

export default Entrada;