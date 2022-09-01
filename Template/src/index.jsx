import React, {useState} from 'react';
import './style.css';

function Inscricao() {
  
  const [visivel, setVisivel] = useState(false);
  
  function expandir() {
    if (visivel) {
      setVisivel(false);
    }
    else {
      setVisivel(true);
    }
  }
  
  return(
    <div className='caixa'>
      <div className='elementos'>
        <h1>Inscreva-se na nossa newsletter</h1>
        <input placeholder='E-mail'/>
        <p>
          Para continuar leia os nossos <span id='termos' onClick={() => expandir()}>Termos e Condições.</span>
        </p>
        {visivel && <p id='texto-extensao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> }
        <button>Aceitar e Continuar</button>
      </div>
    </div>
  );
}
export default Inscricao;