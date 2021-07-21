import React, { useState } from 'react';

import { Container, ButtonAction, ButtonContainer } from './styles';

import { LoginForm, RegisterForm } from '../../Components';

function Login(){

  const [ action, setAction ] = useState(true)

  const handleClick = () => {
    setAction(!action);
  }

  return (
    <Container>
      <ButtonContainer>
        <ButtonAction
          type='button'
          disabled={action}
          onClick={handleClick}
        >
          LOGIN
        </ButtonAction>
        <ButtonAction
          type='button'
          disabled={!action}
          onClick={handleClick}
        >
          REGISTRAR-SE
        </ButtonAction>
      </ButtonContainer>
      {action ? <LoginForm /> : <RegisterForm />}
      
    </Container>
  )
}

export default Login;