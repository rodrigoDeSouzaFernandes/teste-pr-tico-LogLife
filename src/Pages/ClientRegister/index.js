import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import { ClientRegisterForm, Header } from '../../Components';

import { RegisterContainer } from './styles'

function ClientRegister () {

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('acessToken')
    if(!token){
      history.push('/')
    }
  }, [])

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
