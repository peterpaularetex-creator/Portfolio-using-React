import React, { useState } from 'react'
import '../styles/skills.css'
function Skills() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <section id='skills' className='skills'>
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on:</p>
        </section>
    </>
    )
}

export default Skills