import React from 'react';





class Etapa1 extends React.Component {




    render() {



        return (


            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>
                <input></input>
                <p>2. Qual sua idade?</p>
                <input></input>
                <p>3. Qual seu e-mail?</p>
                <input></input>
                <p>4. Qual a sua escolaridade?</p>
                <select id="mySelect" onchange="myFunction()">
                    <option value="EnsinoMI">Ensino médio incompleto</option>
                    <option value="EnsinoMC">Ensino médio completo</option>
                    <option value="EnsinoSI">Ensino superior incompleto</option>
                    <option value="EnsinoSC">Ensino superior completo</option>
                </select>

                <button onClick={this.props.funcaoClickEtapa1}>Proxima etapa</button>
            </div>
        )


    }
}
export default Etapa1;