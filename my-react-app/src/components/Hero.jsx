import React, { useState } from 'react'
function Hero() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <section className="hero">
          <h1>PETER PAUL QUIAÑO</h1>
          <p>Beginner React Developer</p>
          <div>
            <button>Resume</button>
            <button>Portfolio</button>
          </div>
        </section>
    </>
    )
}

export default Hero