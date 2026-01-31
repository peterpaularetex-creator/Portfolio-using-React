import React, { useState } from 'react'
import '../styles/hero.css'

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <section className="hero">
          <h1 className='name'><span style={{fontWeight: 'normal', fontSize: '75px'}}>PETER</span><br/> QUIAÑO</h1>
          <p className='bio'>Web Developer</p>
          <div>
            <button className='btnresume'>Resume</button>
            <button className='btnportfolio'>Portfolio</button>
          </div>
        </section>
    </>
    )
}

export default Hero