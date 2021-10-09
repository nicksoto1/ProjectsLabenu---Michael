import React from 'react';



class Etapa3 extends React.Component {



    render() {


        return (


            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input></input>
                <p>6. Você fez algum curso complementar?</p>
                <input></input>

                <button onClick={this.props.funcaoClickEtapa3}>Proxima etapa</button>
            </div>
        )


    }
}
export default Etapa3;