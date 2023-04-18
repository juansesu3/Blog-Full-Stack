import React from 'react'
import {}
import Logo from "../img/logo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='log'>
          <img src={Logo} alt="logo" />
        </div>
        <div className='links'>Links</div>
      </div>

    </div>
  )
}

export default Navbar