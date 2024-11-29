import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeController from './pages/Home/Home.controller'
import NavBarController from './components/specific/NavBar/NavBar.controller'
import HeaderController from './components/specific/Header/Header.controller'
import GamesController from './pages/Games/Games.controller'
import InfoController from './pages/Info/Info.controller'
import { TitleProvider } from './context/TitleContext'

function App() {

  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>

        <TitleProvider>
          <HeaderController/>
          <NavBarController/>
        
          <Routes>
            <Route exact path='/' element={ <HomeController/> } />
            <Route exact path='/category/:idCategory' element={ <GamesController/> } />
            <Route exact path='/info/:idInfo' element={ <InfoController /> } />
          </Routes>
        </TitleProvider>

      </BrowserRouter>
    </>
  )
}

export default App
