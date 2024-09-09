import React from 'react'
import { useState } from "react"
import "./Revisao.css"

function Revisao() {

    function mudarCoisasGenericas(){
        variavel++
        console.log(variavel)
        setEstado(estado + 1)
    }
     
    let variavel = 0
    const [estado, setEstado] = useState(0)

    
    //document.getElementById("algumElemento").innerHTML = variavel //jeito antigo no js vanilla

    //setEstado(10) //jeito novo no react pra atualizar variavel



  return (
    <div>
        <p>Valor do estado: {estado} </p>
        <p>Valor da variavel: {variavel}</p>
        <p>Revisão de useState</p>
        <button onClick={mudarCoisasGenericas}>Alterar</button>
     
    </div>
  )
}

export default Revisao
