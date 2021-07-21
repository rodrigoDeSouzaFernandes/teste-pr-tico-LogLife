import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import { ClientRegisterForm, Header } from '../../Components';
import { RegisterContainer } from '../ClientRegister/styles';


function EditClient(props) {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('acessToken')
    if(!token){
      history.push('/')
    }
  }, [])

const {id} = props.match.params

  return (
    <>
      <Header />
      <RegisterContainer>
        <ClientRegisterForm edit={true} editId={Number(id)}/>
      </RegisterContainer>
    </>
  )
}

export default EditClient;