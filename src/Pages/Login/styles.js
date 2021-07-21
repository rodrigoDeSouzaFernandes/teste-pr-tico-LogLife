import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  width: 372px;
  
`;

export const ButtonAction = styled.button`
  width: 50%;
  border: none;
  cursor: pointer;
  background: grey;
  color: white;
  font-size: 16px;
  padding: 8px 5px;
  font-weight: 600;

  :disabled {
    background: blue;
  }
`;

