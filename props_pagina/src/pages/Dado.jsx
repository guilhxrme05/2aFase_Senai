import { GiDiceFire } from "react-icons/gi";
import { useState } from "react"
import React from "react"
import Titulo from "../components/Titulo"
import "./Dado.css"

function Dado() {
    const [numero, setNumero] = useState(0)

    function sortear(){
        let numeroGerado = Math.floor(Math.random() * (7 - 1) + 1);
        setNumero(numeroGerado)
        
       }


    return (

    <div className="dado-container">
        <Titulo texto={"Dado 🎲"} />
        <button onClick={sortear} className="btn-dado">ROLAR DADO</button>
        <label className="label-numero">{numero}</label>
 
    
    </div>


    )
}

export default Dado