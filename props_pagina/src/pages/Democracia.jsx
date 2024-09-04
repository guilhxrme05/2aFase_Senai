import React, { useState } from "react";
import Titulo from "../components/Titulo";
import "./Democracia.css";

function Democracia() {
  const [resultado, setResultado] = useState("");

  function verificaChapa() {
    const presidente1  = Number(prompt("Digite a idade do presidente da chapa 1: "))
    const vice1 = Number(prompt("Digite a idade do vice-presidente da chapa 1: "))
    const soma1 = presidente1 + vice1

    const presidente2  = Number(prompt("Digite a idade do presidente da chapa 2: "))
    const  vice2 = Number(prompt("Digite a idade do vice-presidente da chapa 2: "))
    const soma2 = presidente2 + vice2

   
   if (soma1 > soma2) {
      setResultado("A chapa 1 possui mais experiência");
    } else if (soma2 > soma1) {
      setResultado("A chapa 2 possui mais experiência");
    } else {
      setResultado("Mesma experiência");
    }
  }

  return (
    <div>
      <Titulo texto="Verificador de chapa" />
      <button onClick={verificaChapa}>Verificar Chapa</button>
      <div className="resultado">
        <label>{resultado}</label>
      </div>
    </div>
  );
}

export default Democracia;
