import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarListItem = ({ generateLink, pageLink, option }) => {
  return (
    <NavLink to={generateLink(pageLink, option)} key={option.name} 
      className={({isActive}) => (isActive ? 'navbar-middle-list-cells-active' : 'navbar-middle-list-cells')}>
      <img className='navbar-middle-list-img' src={ option.icon } alt="" />
      { option.name }
    </NavLink>
  )
}

export default NavBarListItem