import styled from 'styled-components'

import { TextField, Button } from '@material-ui/core'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px 10px;
  border: grey 1px solid;
  height: 400px;
  justify-content: center;
  width: 350px;
`;

export const LoginTextField = styled(TextField)`
  .MuiInputBase-root {
    margin-bottom: 5px
  }

  .MuiOutlinedInput-input {
    padding: 20px 30px
  }
`;

export const LoginButton = styled(Button)`
`;

export const MessageContainer = styled.p`
  height: 10px;
  margin-bottom: 10px
`;

export const Message = styled.p`
  font-size: 10px;
  color: red;
`;

