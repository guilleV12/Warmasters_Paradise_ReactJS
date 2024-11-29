import React from 'react'
import Info from './Info'
import MetaTags from '../../components/global/MetaTags/MetaTags'

const InfoController = () => {
  return (
    <MetaTags title={'Informacion'} description={'Pagina de informacion de Warmasters Paradise.'}>
      <Info />
    </MetaTags>
  )
}

export default InfoController