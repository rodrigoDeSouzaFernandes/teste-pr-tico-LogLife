import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

