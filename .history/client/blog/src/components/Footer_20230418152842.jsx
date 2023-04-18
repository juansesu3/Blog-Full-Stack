import React from 'react'
import Logo from '../img/logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt='logo'/>
      <span>Developed whith<b>React.js</b> by NeGiUpp</span>
    </footer>
  )
}

export default Footer