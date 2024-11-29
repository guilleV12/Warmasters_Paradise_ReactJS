import React, { useContext, useState } from 'react'
import LoginLogo from '/images/user.png'
import Header from './Header'
import { TitleContext } from '../../../context/TitleContext'
import MenuIcon from '/images/menu.png'
/*Styles CSS*/
import './styles/headerGeneral.css'
import './styles/headerMobile.css'
import './styles/headerTablet.css'
import './styles/headerComputer.css'

const HeaderController = () => {
  const { title, handleClickBurgerMenu } = useContext(TitleContext)

  return (
    <>
        <Header title={title} logo={LoginLogo} menuLogo={MenuIcon} handleClickBurgerMenu={handleClickBurgerMenu}/>
    </>
  )
}

export default HeaderController