import { useState } from "react"
import React from "react"
import Titulo from "../components/Titulo"
import "./Porco.css"


function Porco(){
    const [numero, setNumero] = useState(0)

    let preco = Number(prompt("Qual o valor do produto?"))

    let moedas1 = Number(prompt("Quantas moedas de R$1,00?"))
    let moedas050 = Number(prompt("Quantas moedas de R$0,50?"))
    let moedas025 = Number(prompt("Quantas moedas de R$0,25?"))
    let moedas010 = Number(prompt("Quantas moedas de R$0,10?"))
    let moedas005 = Number(prompt("Quantas moedas de R$0,05?"))

    let valorTotal = (moedas1 * 1) + (moedas050 * 0.50) + (moedas025 * 0.25) + (moedas010 * 0.10) + (moedas005 * 0.05)
    


    return (



        <div> 
            <Titulo texto={"Porquinho 🐷"} />
            
        



      {}
        </div>
    )
}

export default Porco