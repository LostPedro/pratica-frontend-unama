import React from 'react'
import './style.css'


const LogoComponent = ({
  logo,
}) => {
  
  return (
    <img src={logo} className="App-logo" alt="logo" />
  )
}

export default LogoComponent