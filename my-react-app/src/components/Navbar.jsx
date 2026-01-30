import React, { useState } from 'react'
function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <header>
          <h1>
            I'm Peter Paul G. Quiaño
          </h1>
          <p>Beginner React Developer</p>
        </header>
    </>
    )
}

export default Navbar