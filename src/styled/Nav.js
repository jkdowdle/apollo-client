import React from 'react'

import { Nav, Logo, NavList, NavItem } from './index'

export const Navbar = () => {
  return (
    <Nav>
      <Logo>Nav</Logo>
      <NavList>
        <NavItem>Link One</NavItem>
        <NavItem>Link Two</NavItem>
        <NavItem>Link Three</NavItem>
        <NavItem>Link Four</NavItem>
      </NavList>
    </Nav>
  )
}

export default Navbar
