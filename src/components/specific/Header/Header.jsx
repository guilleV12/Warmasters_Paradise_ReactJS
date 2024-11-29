import React from 'react'

const Header = ({ title, logo, menuLogo, handleClickBurgerMenu }) => {
  return (
    <header className='main-header'>
      <div className="header-left-container">
        <div className="menu-container">
          <div className="header-logos-container" id='burger-menu-container'>
            <img src={menuLogo} id='menu-responsive' alt="" className="header-logo" onClick={() => {handleClickBurgerMenu()}}/>
          </div>
        </div>
        <h1 className='header-title'>{ title }</h1>
      </div>
      <div className="header-right-container">
        <div className="header-logos-container">
          <img src={logo} className='header-logo' alt="" />
          <span className='header-logo-tooltip'>Iniciar Sesion en Warmasters Paradise</span>
        </div>
        <div className="header-logos-container">
          <img src={logo} className='header-logo' alt="" />
          <span className='header-logo-span'>+</span>
          <span className='header-logo-tooltip'>Registrarse en Warmasters Paradise</span>
        </div>
      </div>
    </header>
  )
}

export default Header