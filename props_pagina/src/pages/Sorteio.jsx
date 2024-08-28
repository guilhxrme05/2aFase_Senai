import Titulo from "../components/Titulo"
import "./Sorteio.css"

function Sorteio() {
    function sortear(){
     let numeroGerado = Math.floor(Math.random() * (99 - 0) + 0);
     alert(`Numero gerado: ${numeroGerado}`)
     
    }
  return (
    <div className="sorteio-container">
      <Titulo texto={"Sorteio 🐯"} />
      <button onClick={sortear}>Sortear número</button>
    </div>
  )
}

export default Sorteio
