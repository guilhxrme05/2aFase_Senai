import React, { useState } from 'react';
import './ArCondicionado.css'

function ArCondicionado() {
    const [inputCelsius, setInputCelsius] = useState("")
    const [inputFahren, setInputFahren] = useState("")


    function mudouCelsius(event){
        setInputCelsius(event.target.value)
        let f = (event.target.value * 1.8 + 32).toFixed(2)
        setInputFahren(f)
    }

    function mudouFahren(event){
        setInputFahren(event.target.value)
        let c = ((event.target.value - 32) / 1.8).toFixed(2)
        setInputCelsius(c)
    }
  return (
    <div>
      <h1>Exercício 5.27</h1>
      <p>Ligar o ar condicionado: Faça um programa onde o usuário irá escolher se quer converter graus Celsius para Fahrenheit ou Fahrenheit para Celsius. Após a ecolha, faça uma leitura e converta para a unidade escolhida.</p>
      
      <label htmlFor='inpC'>Celsius</label>
      <input type="number" id='inpC'
        value={inputCelsius}
        onChange={ mudouCelsius }
        
      />

<label htmlFor='inpF'>Fahrenheit</label>
      <input type="number" id='inpF'
        value={inputFahren}
        onChange={ mudouFahren }
      />
      
      
     
    </div>
  )
}

export default ArCondicionado
