import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt='logo'/>
      <span>Developed whith ♥️ and <b>React.js</b> by NeGiUpp</span>
    </footer>
  )
}

export default Footer