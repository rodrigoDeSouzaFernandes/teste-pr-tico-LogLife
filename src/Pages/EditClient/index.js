import React from 'react';

import { ClientRegisterForm, Header } from '../../Components';


function EditClient(props) {

const {id} = props.match.params

  return (
    <div>
      <Header />
      <ClientRegisterForm edit={true} editId={Number(id)}/>
    </div>
  )
}

export default EditClient;