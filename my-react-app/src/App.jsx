import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import About from './components/about.jsx'
import Skills from './components/Skills.jsx'
import Hero from './components/Hero.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </div>
    </>
  )
}

export default App
