import React, { useState } from 'react'
import '../styles/about.css'
import Myimage from '../assets/portrait.jpg'

function About() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <section id="about" className='about'>
          <div className='about-text'>
            <h2>About</h2>
            <p>
                I'm Peter Paul G. Quiaño, a beginner React developer passionate about building web applications 
                and enhancing user experiences. I'm eager to learn and grow in the field of web development.
            </p>
          </div>
          <div className='about-image'>
            <img src={Myimage} alt="My Portrait" />
          </div>
        </section>
    </>
    )
}

export default About