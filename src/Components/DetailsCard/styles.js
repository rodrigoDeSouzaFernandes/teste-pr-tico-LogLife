import styled from 'styled-components';

export const DetailsKey = styled.span`
  color: ${(props) => props.theme.colors.text};
  padding: 10px;
`;

export const Data = styled.p`
  padding: 5px;
  :hover {
    background: ${(props) => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
  }
`;

export const Card = styled.div`
  padding: 30px;
  width: 300px;
  height: fit-content;
  background: white;
  box-shadow: 2px 2px 5px grey;
  align-self: center;
  margin: 30px 0;
`;

export const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 10px
`;

export const DetailsBody = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.background}
`;

export const BtnContainer = styled.div`

`;

export const BtnClient = styled.button`
  width: 50%;
  color: white;
  font-weight: 600;
  border: none;
  padding: 10px 0;
  background: rgb(250, 100 , 100);
  margin-top: 10px;
  :nth-child(odd) {
    background: rgb(50, 50 , 50);
  }
`;