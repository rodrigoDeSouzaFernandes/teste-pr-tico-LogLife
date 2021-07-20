import React from 'react';
import { ClientRegisterForm, Header } from '../../Components';

import { RegisterContainer } from './styles'

function ClientRegister () {
  return (
    <>
      <Header />
      <RegisterContainer>
        <ClientRegisterForm />
      </RegisterContainer>
    </>
  )
}

export default ClientRegister;
