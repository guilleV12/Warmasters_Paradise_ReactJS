import React from 'react'
import NavBarListController from '../NavBarList/NavBarList.controller'
import DivisionLine from '../../global/DivisionLine/DivisionLine'

const NavBar = ({ isMenuVisible, handleClickCloseMenu, closeMenu, ...navbarData }) => {
  const {categories, more, home} = navbarData

  return (
        <aside className='main-navbar' id={`nav${isMenuVisible ? '-visible' : '-hidden'}`}>
          <div className="navbar-top-container">
            <div className="header-logos-container" id='close-menu-container'>
              <img src={closeMenu} alt="" className="header-logo" onClick={() => {handleClickCloseMenu()}}/>
            </div>
            <h1 className='navbar-title'>WARMASTERS<span className='navbar-title-span'>PARADISE</span></h1>
          </div>
          <nav className='navbar-middle-container'>

            <NavBarListController menuOptions={home} pageLink={'/'}/>
              <DivisionLine />
            <NavBarListController menuOptions={categories} pageLink={'category'}/>
              <DivisionLine />
            <NavBarListController menuOptions={more} pageLink={'info'}/>
            
          </nav>
        </aside>
  )
}

export default NavBar