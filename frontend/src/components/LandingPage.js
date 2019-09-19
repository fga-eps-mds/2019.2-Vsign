import React, { Component } from 'react'
import './LandingPage.css';
import camera_icon from '../assets/images/camera-icon.png';
import user_icon from '../assets/images/user-icon.png';


let i = null;
function mostraTexto() {
    i++;
    console.log(i);
}
function relataErro(){

}

export class LandingPage extends Component {
    render() {
        return (
            <div className='container borda'>
                {/* <div className='header borda'>
                    <h1>Vsign</h1>
                </div> */}
                <div className='cabecalho borda'>
                    <img src={user_icon} alt=''/>
                    <p>Contrato Nº###</p>

                </div>
                <div className='instrucao borda'>
                    <p>Para assinar o contrato você deve ler o roteiro
                        abaixo e gravar um video aqui mesmo na nossa plataforma.
                    </p>
                </div>
                <div className="tela borda">
                    <h2>Roteiro</h2>
                    <p>(exibir o roteiro aqui)</p>
                </div>
                    
                <button className="gravar borda" onClick={() => mostraTexto()}>
                    <p>Gravar</p>
                    <img src={camera_icon} alt="" />
                </button>
                <button className='erro borda' onClick={() => relataErro()}>
                    <p>Relatar erro no texto do roteiro</p>
                </button>
            </div>
        )
    }
}

export default LandingPage