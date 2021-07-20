import React from 'react';
import { Container } from './styles';

import { LoginForm, RegisterForm } from '../../Components';

function Login(){
  return (
    <Container>
      <LoginForm />
      <RegisterForm />
    </Container>
  )
}

export default Login;