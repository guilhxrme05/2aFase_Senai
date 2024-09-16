import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ArCondicionado from './pages/ArCondicionado'
import Porco from './pages/Porco'

function App() {
  const [pagina, setPagina] = useState()

  return (
    <>

    <nav>
      <button onClick={() => setPagina(<ArCondicionado />)}>5.27</button>
      <button onClick={() => setPagina(<Porco />)}>5.25</button>
    </nav>
     { pagina }
    </>
  )
}

export default App
