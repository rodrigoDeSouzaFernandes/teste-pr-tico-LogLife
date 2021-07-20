import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display:flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  font-size: 17px;
  height: 50px;
  padding: 0 15px;
`;

export const NavBar = styled.nav`
  background:none;
`;

export const NavLink = styled(Link)`
  width: 135px;
  border-radius: 6px;
  text-decoration: none;
  padding: 10px;
  margin: 0 2.5px;
  transition: .5s;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;

  :hover {
    color: black;
  }
`;
