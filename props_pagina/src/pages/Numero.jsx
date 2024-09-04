import React, { useState } from "react";
import Titulo from "../components/Titulo";
import "./Numero.css";

function Numero() {
  const [resultado, setResultado] = useState("");

  function verificaNumero() {
    const numero = prompt("Digite um número: ");
    const valor = Number(numero);

    
    if (valor == 0) {
      setResultado("O número é nulo.");
    } else if (valor > 0) {
      setResultado("O número é positivo.");
    } else {
      setResultado("O número é negativo.");
    }
  }

  return (
    <div>
      <Titulo texto="Verificador de Número" />
      <button onClick={verificaNumero}>Verificar Número</button>
      <div className="resultado">
        <label>{resultado}</label>
      </div>
    </div>
  );
}

export default Numero
