import { colors } from '@material-ui/core';
import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 100px 0;
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;