import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import { getJsonData } from '../../../utils/getData'
import closeMenu from '/images/close.png'
import { TitleContext } from '../../../context/TitleContext'
/*Styles CSS*/
import './styles/navbarGeneral.css'
import './styles/navbarMobile.css'
import './styles/navbarTablet.css'
import './styles/navbarComputer.css'

const NavBarController = ({  }) => {
  const [navbarData, setNavbarData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const {isMenuVisible, handleClickCloseMenu} = useContext(TitleContext)

  useEffect(() => {
    const loadNavbarData = async() => {
      try {
        const data = await getJsonData()
        setNavbarData(data)
      } catch (error) {
        setError('Hubo un error al cargar los datos')
      } finally {
        setLoading(false)
      }
    }

    loadNavbarData()
  })

  if (loading) {
    return <div> Cargando... </div>
  }

  if (error) {
    return <div> Error: {error} </div>
  }

  return (
    <NavBar {...navbarData} isMenuVisible={isMenuVisible} handleClickCloseMenu={handleClickCloseMenu} closeMenu={closeMenu}/>
  )
}

export default NavBarController