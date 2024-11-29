import React from 'react'
import Games from './Games'
import MetaTags from '../../components/global/MetaTags/MetaTags'

const GamesController = () => {
  return (
    <MetaTags title={'Juegos'} description={'Catalogo de juegos de warmasters paradise.'}>
      <Games />
    </MetaTags>
  )
}

export default GamesController