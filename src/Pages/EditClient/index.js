import React from 'react';

import { ClientRegisterForm, Header } from '../../Components';
import { RegisterContainer } from '../ClientRegister/styles';


function EditClient(props) {

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