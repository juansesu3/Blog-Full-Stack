import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"
import "s"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='link'>
          <Link>ART</Link>
          </div>
      </div>

    </div>
  )
}

export default Navbar