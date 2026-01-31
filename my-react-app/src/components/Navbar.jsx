import React, { useState } from 'react';
import '../styles/navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollRoSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <> 
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            My Portfolio
          </div>
          <div className='hamburger' onClick={toggleMenu}>
            <span className={isOpen ? 'bar active' : 'bar'}></span>
            <span className={isOpen ? 'bar active' : 'bar'}></span>
            <span className={isOpen ? 'bar active' : 'bar'}></span>
          </div>
          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <button onClick={() => scrollRoSection('hero')}>Home</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollRoSection('about')}>About</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollRoSection('skills')}>Skills</button>
            </li>
          </ul>
        </div>  
      </nav>    
    </>
    )
}

export default Navbar