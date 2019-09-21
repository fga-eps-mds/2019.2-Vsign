import React from 'react';
import './SigningTips.css';

const SigningTips = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>VSign</h2>
      </div>

      <div className="body">
        <div className="steps">
          <h1>Guia de como assinar um contrato</h1>

          <div className="guide">
            <h2>Passo 1:</h2>
            <p>Verifique se o número do contrato está correto, em seguida, leia a prévia do roteiro e certifique-se que está tudo correto.</p>

            <h2>Passo 2:</h2>
            <p>Clique em 'Gravar' e aguarde o vídeo começar. Quando o vídeo começar, uma legenda sob o vídeo irá aparecer, você irá ler essa legenda.</p>

            <h2>Passo 3:</h2>
            <p>Revise o seu vídeo, caso esteja tudo bem, aceite os termos e envie a proposta.</p>
          </div>

          <div className='sign-button'>
            <button onClick={() => alert("Indo para a tela de assinar!")}>
              <p>Começar</p>
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SigningTips;