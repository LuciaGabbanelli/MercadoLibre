import React from 'react'
// components
import SearchBox from './SearchBox'
// img
import logo from '../assets/Logo_ML.png'

const Header = () => {
  return (
    <div className="header_container">
      <img alt="Logo de Mercado libre" src={logo} className="header_logo" />
      <SearchBox />
    </div>
  )
}

export default Header
