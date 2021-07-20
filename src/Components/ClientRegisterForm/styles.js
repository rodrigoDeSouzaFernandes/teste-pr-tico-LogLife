import styled from 'styled-components';

import { TextField, RadioGroup, FormControlLabel } from '@material-ui/core'

export const ClientForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 500px;
padding: 40px 20px;
border-radius: 10px;
background-color: white;
box-shadow: 5px 5px 10px ${(props) => props.theme.colors.background};
`;

export const ClientTextField = styled(TextField)`
  .MuiInputBase-root {
    margin-bottom: 10px
  }

  .MuiOutlinedInput-input {
    padding: 20px 30px
  }
`;

export const GroupRadio = styled(RadioGroup)`
`;

export const ControlFormLabel = styled(FormControlLabel)``;
