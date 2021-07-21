import React from 'react';

import { HeaderContainer, NavBar, NavLink, Logo } from './styles'

import logoLogLife from '../../logo_loglife-250x74.png'

function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoLogLife} alt='logo'/>
      <NavBar>
        <NavLink to='/home' >Home</NavLink>
        <NavLink to='/register' >Cadastrar cliente</NavLink>
        <NavLink to='/clients-list' >Lista de clientes</NavLink>
      </NavBar>
    </HeaderContainer>
  )
}

export default Header;