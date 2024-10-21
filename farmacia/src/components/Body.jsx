// Body.js
import React from 'react';
import './Body.css';
import Beneficios from './Beneficios';

const Body = ({ fila, filaPreferencial, gerarSenha, gerarPreferencial, atender }) => {
  return (
    <div className="body-container">
      <h1 className="main-title">Bem-vindos à Nova Farmácia da Vizinhança!</h1>
      <p className="subtitle">
        A Farmárcia agora está em um novo local e queremos que todos os nossos vizinhos conheçam a nova marca!
      </p>
      <p className="invitation">
        Venha nos visitar na inauguração e aproveite descontos e ofertas especiais para os primeiros clientes.
      </p>
      
      <div className="image-container">
        <img src="./farmarcia-logo-pq.png" alt="Nova Farmácia" className="farmacia-image" />
      </div>

      <div className="details">
        <h2>Data da Inauguração:</h2>
        <p>25 de Outubro, a partir das 10h</p>
        <h2>Endereço:</h2>
        <p>Rua das Flores, 123 - Centro</p>
        <h2>Ofertas Especiais:</h2>
        <ul>
          <li>Descontos de até 50% em medicamentos</li>
          <li>Kit de primeiros socorros grátis nas primeiras compras</li>
          <li>Sorteio de brindes exclusivos</li>
        </ul>
      </div>

      <Beneficios />

      <div className="fila-container">
        <h2>Gerador de Senha e Fila de Atendimento</h2>
        
        <div className="button-container">
          <button onClick={atender}>Atender</button>
          <button onClick={gerarSenha}>Senha Normal</button>
          <button onClick={gerarPreferencial}>Senha Preferencial</button>
        </div>
        
        <div className="senhas-container">
          <div>
            <h3>Fila Normal</h3>
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
            <h3>Fila Preferencial</h3>
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
    </div>
  );
};

export default Body;
