import React from 'react'
import logo from '../assets/Logo.png'
import naavic from '../assets/naavic-2.jpg'
import hamburgerIcon from '../assets/hamburger.png'
const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <div className='hamburger-icon-div'><img src={hamburgerIcon} className='hamburger-icon' alt="" /></div>
            <div className="hamburger-nav">
              <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">INNOVATIONS</a></li>
                <li><a href="#">ABOUT</a></li>
              </ul>
            </div>
            <img src={logo} alt="logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Innovations</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <img src={naavic} alt="" />
        </nav>
    </>
  )
}

export default Navbar