import React from 'react';

import { HeaderContainer, NavBar, NavLink } from './styles'

function Header() {
  return (
    <HeaderContainer>
      <div>logo</div>
      <NavBar>
        <NavLink to='/home' >Home</NavLink>
        <NavLink to='/register' >Cadastrar cliente</NavLink>
        <NavLink to='/clients-list' >Lista de clientes</NavLink>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header;