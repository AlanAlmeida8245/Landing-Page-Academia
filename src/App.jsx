import { useState } from 'react'
import Pessoas from "./assets/pessoas.png"
import SectionImage from './components/SectionImage'
import PrincipalImagem from "./assets/imagem-academia.jpg"
import Navbar from "./components/Navbar"
import Informação from './components/Informação'
import Planos from "./components/Planos"
import Beneficios from './components/Beneficios'
import Footer from "./components/Footer"
import "./App.css"

function App() {



  return (
    <div className="App">
      <Navbar /> 
      <SectionImage />
      <Informação />
      <Planos />
      <Beneficios />
      <Footer />
    </div>
  )
}

export default App
