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
  border: 1px solid grey;
`;

export const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 10px
`;