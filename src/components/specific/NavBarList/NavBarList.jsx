import React from 'react'
import NavBarListItem from './NavBarListItem'

const NavBarList = ({ menuOptions, pageLink, generateLink }) => {
  return (
    <ul className='navbar-middle-lists'>
      {
        menuOptions.map((option) => (
          <NavBarListItem option={option} pageLink={pageLink} generateLink={generateLink} key={option.name}/>
        ))
      }
    </ul>
  )
}

export default NavBarList