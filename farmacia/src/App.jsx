import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const [fila, setFila] = useState([]);
  const [filaPreferencial, setFilaPreferencial] = useState([]);

  const gerarSenha = () => {
    let senha = {
      numero: Math.floor(Math.random() * 9000) + 1000,
      tipo: 'normal',
    };
    setFila([...fila, senha]);
  };

  const gerarPreferencial = () => {
    let senhaPreferencial = {
      numero: Math.floor(Math.random() * 9000) + 1000,
      tipo: 'preferencial',
    };
    setFilaPreferencial([...filaPreferencial, senhaPreferencial]);
  };

  const atender = () => {
    if (filaPreferencial.length > 0) {
      alert(`Atendendo preferencial: ${filaPreferencial[0].numero}`);
      setFilaPreferencial(filaPreferencial.slice(1));
    } else if (fila.length > 0) {
      alert(`Atendendo normal: ${fila[0].numero}`);
      setFila(fila.slice(1));
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
