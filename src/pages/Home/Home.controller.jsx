import React from 'react'
import Home from './Home'
import './home.css'
import MetaTags from '../../components/global/MetaTags/MetaTags'

const HomeController = () => {
  return (
    <MetaTags title={'Inicio'} description={'Pagina de inicio de warmasters paradise.'}>
      <Home />
    </MetaTags>
  )
}

export default HomeController