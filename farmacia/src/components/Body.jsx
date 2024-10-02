import React from 'react';
import './Body.css';

const Body = ({ fila, filaPreferencial, gerarSenha, gerarPreferencial, atender }) => {
  return (
    <div className="body-container">
      <h1>Gerador de Senha e Fila de Atendimento</h1>
      
      <div className="button-container">
        <button onClick={atender}>Atender</button>
        <button onClick={gerarSenha}>Senha Normal</button>
        <button onClick={gerarPreferencial}>Senha Preferencial</button>
      </div>
      
      <div className="senhas-container">
        <div>
          <h2>Fila Normal</h2>
          {fila.length === 0 ? (
            <p>Nenhuma senha normal gerada.</p>
          ) : (
            fila.map((senha) => (
              <div className="div-senha" key={senha.numero}>
                <p>Senha: {senha.numero}</p>
                <p>Tipo: {senha.tipo}</p>
              </div>
            ))
          )}
        </div>

        <div>
          <h2>Fila Preferencial</h2>
          {filaPreferencial.length === 0 ? (
            <p>Nenhuma senha preferencial gerada.</p>
          ) : (
            filaPreferencial.map((senhaPreferencial) => (
              <div className="div-senha" key={senhaPreferencial.numero}>
                <p>Senha: {senhaPreferencial.numero}</p>
                <p>Tipo: {senhaPreferencial.tipo}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
