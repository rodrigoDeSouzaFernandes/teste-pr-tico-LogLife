import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import { Container, ButtonAction, ButtonContainer } from './styles';

import { LoginForm, RegisterForm } from '../../Components';

function Login(){

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('acessToken')
    if(token){
      history.push('/home')
    }
  }, [])

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