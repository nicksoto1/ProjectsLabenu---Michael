import React from 'react';



class Etapa2 extends React.Component {



    render() {


        return (


            <div>
                <h1>ETAPA 2 -INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p>5. Qual curso?</p>
                <input></input>
                <p>6. Qual a unidade de ensino?</p>
                <input></input>

                <button onClick={this.props.funcaoClickEtapa2}>Proxima etapa</button>
            </div>
        )


    }
}
export default Etapa2;