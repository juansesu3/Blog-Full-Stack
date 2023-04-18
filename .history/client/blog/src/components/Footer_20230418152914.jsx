import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt='logo'/>
      <span>Developed by NeGiUpp whith <b>React.js</b> and ♥️ </span>
    </footer>
  )
}

export default Footer