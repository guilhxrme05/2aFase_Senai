import { useState } from "react"
import Titulo from "../components/Titulo"
import "./Sorteio.css"




function Sorteio() {
  const [numero, setNumero] = useState(0)
  

  function aumentar(){
    setNumero(numero + 1)
  }
  function diminuir(){
    setNumero(numero - 1)
  }
    
    function sortear(){
     let numeroGerado = Math.floor(Math.random() * (100 - 0) + 0);
     setNumero(numeroGerado)
     
    }
  return (
    <div className="sorteio-container">
      <Titulo texto={"Sorteio 🐯✔"} />
      <button className="button-sorteio" onClick={sortear}>Sortear número</button>
      <div className="aparecer-numero">
      
      <button className="btn-2" onClick={aumentar}>+</button><label className="label-numero">{numero}</label><button className="btn-2" onClick={diminuir}>-</button>

      </div>
      
    </div>
  )
}

export default Sorteio
