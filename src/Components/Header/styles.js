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

  @media screen and (max-width: 700px) {
    flex-direction: column;
    height: fit-content;
    padding: 10px;
  }
`;

export const NavBar = styled.nav`
  background:none;
  
  @media screen and (max-width: 700px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 10px;
  }
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

export const Logo = styled.img`
  filter: invert(75%);
  width: 130px;

@media screen and (max-width: 700px) {
  display: none;
}
`;
