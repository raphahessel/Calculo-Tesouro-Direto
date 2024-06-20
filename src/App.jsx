import './App.css'
import { Botao } from "./components/Botao/Botao";

function App() {
  return (
    <>
      <div className='content'>
        <div className='calculadora'>
          <div className='calculadoraHeader'>
            <p>9</p>
            <p> /3</p>
          </div>
          <div className='botoes'>
            <div className="linhas"> <Botao color={"#a5a5a5"} background={"#616161"} text={"CE"}> Teste</Botao></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
