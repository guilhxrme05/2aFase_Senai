import { useState } from 'react'
import './App.css'

function App() {

  const [fila, setFila] = useState([])
  const [filaPreferencial, setFilaPreferencial] = useState([])

  function gerarSenha(){

    let senha = {
      numero: Math.floor(Math.random() * 9000) + 1000,
      tipo: "normal"
    }

    setFila([...fila, senha])

  
  }

  function gerarPreferencial(){

    let senhaPreferencial = {
         numero: Math.floor(Math.random() * 9000) + 1000,
         tipo: "preferencial"

    }

    setFilaPreferencial([...filaPreferencial, senhaPreferencial])
  }
  
  function atender() {
    if (fila.length && filaPreferencial.length === 0) {
      let menorIndex = 0;
  
      for (let i = 1; i < fila.length; i++) {
        if (fila[i].numero < fila[menorIndex].numero) {
          menorIndex = i;
        }
      }
  
      alert(fila[menorIndex].numero);
      fila.splice(menorIndex, 1);
      setFila([...fila]);
  
    } else if (fila.length && filaPreferencial.length) {
      let menorIndex = 0;
  
      for (let i = 1; i < filaPreferencial.length; i++) {
        if (filaPreferencial[i].numero < filaPreferencial[menorIndex].numero) {
          menorIndex = i;
        }
      }
  
      alert(filaPreferencial[menorIndex].numero);
      filaPreferencial.splice(menorIndex, 1); 
      setFilaPreferencial([...filaPreferencial]);
  
    } else if (fila.length === 0 && filaPreferencial.length) {
      let menorIndex = 0;
  
      for (let i = 1; i < filaPreferencial.length; i++) {
        if (filaPreferencial[i].numero < filaPreferencial[menorIndex].numero) {
          menorIndex = i;
        }
      }
  
      alert(filaPreferencial[menorIndex].numero);
      filaPreferencial.splice(menorIndex, 1); 
      setFilaPreferencial([...filaPreferencial]); 
  
    } else if (fila.length === 0 && filaPreferencial.length === 0) {
      alert("Ninguem na fila.");
    }
  }



  return (
    <>
      <button onClick={atender}>Atender</button>
      <button onClick={gerarSenha}>Senha Normal</button>
      <button onClick={gerarPreferencial}>Senha Preferencial</button>
      {fila.map((senha) => (

      <div key={senha.numero}>
       <p>{senha.numero}</p>
       <p>{senha.tipo}</p>


      </div>
      )

      
      
      
      
      )}

{filaPreferencial.map((senhaPreferencial) => (

<div key={senhaPreferencial.numero}>
 <p>{senhaPreferencial.numero}</p>
 <p>{senhaPreferencial.tipo}</p>


</div>
)





)}
      
    </>
  )
}

export default App
