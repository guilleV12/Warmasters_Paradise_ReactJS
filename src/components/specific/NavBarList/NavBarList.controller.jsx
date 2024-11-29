import React from 'react'
import NavBarList from './NavBarList';

const NavBarListController = ({ menuOptions, pageLink }) => {
  const generateLink = (pageLink, option) => {
    if (pageLink === 'category' || pageLink === 'info') {
      return `${pageLink}/:${option.name}`;
    }
    return pageLink;
  }

  return (
    <NavBarList menuOptions={menuOptions} pageLink={pageLink} generateLink={generateLink}/>
  )
}

export default NavBarListController