import React, { useState } from "react"
import Titulo from "../components/Titulo"
import "./Notas.css"

function Notas() {
  const [notaUm, setNotaUm] = useState()
  const [notaDois, setNotaDois] = useState()
  const [notaTres, setNotaTres] = useState()

  const [pesoUm, setPesoUm] = useState()
  const [pesoDois, setPesoDois] = useState()
  const [pesoTres, setPesoTres] = useState()

  const [resultado, setResultado] = useState()

  const [inputNotaUm, setinputNotaUm] = useState()
  const [inputNotaDois, setinputNotaDois] = useState()
  const [inputNotaTres, setinputNotaTres] = useState()

  const [inputPesoUm, setinputPesoUm] = useState()
  const [inputPesoDois, setinputPesoDois] = useState()
  const [inputPesoTres, setinputPesoTres] = useState()
  

  function calcularMediaPonderada() {
    let produtoNotaUm = notaUm * pesoUm
    let produtoNotaDois = notaDois * pesoDois
    let produtoNotaTres = notaTres * pesoTres

    let somaProdutos = produtoNotaUm + produtoNotaDois + produtoNotaTres
    let somaPesos = pesoUm + pesoDois + pesoTres;

    let mediaPonderada = somaProdutos / somaPesos;

    setResultado(mediaPonderada);
  }

  function pegarValores() {
    

    
    setNotaUm(Number(inputNotaUm))
    setNotaDois(Number(inputNotaDois))
    setNotaTres(Number(inputNotaTres))

    setPesoUm(Number(inputPesoUm))
    setPesoDois(Number(inputPesoDois))
    setPesoTres(Number(inputPesoTres))

    calcularMediaPonderada()
  }

  function mudouNotaUm(event){
    
    setinputNotaUm(event.target.value)

  }

  function mudouNotaDois(event){
    
    setinputNotaDois(event.target.value)
  }

  function mudouNotaTres(event){
    
    setinputNotaTres(event.target.value)
  }

  function mudouPesoUm(event){
    
    setinputPesoUm(event.target.value)
  }

  function mudouPesoDois(event){
    
    setinputPesoDois(event.target.value)
  }


  function mudouPesoTres(event){
    
    setinputPesoTres(event.target.value)
  }

  return (
    <div>
      <Titulo texto={"Calculadora de média 📝"} />

      <div className="inputs">
        <label>Nota um</label><input onChange={mudouNotaUm} className="inputNotaUm" value={inputNotaUm}  type="number" />
        <label>Nota dois</label><input onChange={mudouNotaDois} className="inputNotaDois" value={inputNotaDois}  type="number" />
        <label>Nota três</label><input onChange={mudouNotaTres} className="inputNotaTres" value={inputNotaTres} type="number" />

        <label>Peso um</label><input onChange={mudouPesoUm} className="inputPesoUm" value={inputPesoUm}  type="number" />
        <label>Peso dois</label><input onChange={mudouPesoDois} className="inputPesoDois" value={inputPesoDois}  type="number" />
        <label>Peso três</label><input onChange={mudouPesoTres} className="inputPesoTres" value={inputPesoTres}  type="number" />

        <button className="buttonMedia" onClick={pegarValores}>Calcular Média</button>
        
        
        

        <label className="lbl-media">Média: {resultado}</label>
        
        
      </div>
    </div>
  );
}

export default Notas;
