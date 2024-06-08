import React, { useState } from 'react';
/*import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';*/
import logo from '../assets/devdynamicslogo.jpeg';
import './navbar.css';

const Navbar = () => {
  /*const [toggleMenu, setToggleMenu] = useState(false);*/

  return (
    <div className='devdynamics__navbar'>
      <div className="devdynamics__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className='devdynamics__navbar-links'>
        <div className="devdynamics__navbar-links_container">
          <p><a href="#home" className="nav-link">Home</a></p>
          <p><a href="#summary" className="nav-link">Summary</a></p>
          <p><a href="#dashboard" className="nav-link">Dashboard</a></p>
          <p><a href="#daywise" className="nav-link">Daywise</a></p>
          <p><a href="#contact" className="nav-link">Contact</a></p>
        </div>
      </div> 
    
      <div className="devdynamics__navbar-menu">
        {/*toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="devdynamics__navbar-menu_container scale-up-center">
          <div className="devdynamics__navbar-menu_container-links">
            <p><a href="#home" className="nav-link">Home</a></p>
            <p><a href="#summary" className="nav-link">Summary</a></p>
            <p><a href="#dashboard" className="nav-link">Dashboard</a></p>
            <p><a href="#daywise" className="nav-link">Daywise</a></p>
            <p><a href="#contact" className="nav-link">Contact</a></p>
          </div>
          <div className="devdynamics__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )*/}
      </div>
    </div>
  );
};

export default Navbar;
