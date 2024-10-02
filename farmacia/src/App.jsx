import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [fila, setFila] = useState([]);
  const [filaPreferencial, setFilaPreferencial] = useState([]);

  // Função para gerar senha normal
  const gerarSenha = () => {
    let senha = {
      numero: Math.floor(Math.random() * 9000) + 1000,
      tipo: 'normal',
    };
    setFila([...fila, senha]);
  };

  // Função para gerar senha preferencial
  const gerarPreferencial = () => {
    let senhaPreferencial = {
      numero: Math.floor(Math.random() * 9000) + 1000,
      tipo: 'preferencial',
    };
    setFilaPreferencial([...filaPreferencial, senhaPreferencial]);
  };

  // Função para atender as senhas na fila
  const atender = () => {
    if (filaPreferencial.length > 0) {
      let menorIndex = 0;
      for (let i = 1; i < filaPreferencial.length; i++) {
        if (filaPreferencial[i].numero < filaPreferencial[menorIndex].numero) {
          menorIndex = i;
        }
      }
      alert(`Atendendo preferencial: ${filaPreferencial[menorIndex].numero}`);
      filaPreferencial.splice(menorIndex, 1);
      setFilaPreferencial([...filaPreferencial]);
    } else if (fila.length > 0) {
      let menorIndex = 0;
      for (let i = 1; i < fila.length; i++) {
        if (fila[i].numero < fila[menorIndex].numero) {
          menorIndex = i;
        }
      }
      alert(`Atendendo normal: ${fila[menorIndex].numero}`);
      fila.splice(menorIndex, 1);
      setFila([...fila]);
    } else {
      alert('Ninguém na fila.');
    }
  };

  return (
    <div className="app-container">
      <Header />
      <Body
        fila={fila}
        filaPreferencial={filaPreferencial}
        gerarSenha={gerarSenha}
        gerarPreferencial={gerarPreferencial}
        atender={atender}
      />
    </div>
  );
}

export default App;
