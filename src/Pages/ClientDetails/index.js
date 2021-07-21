import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import DetailsCard from '../../Components/DetailsCard';
import Context from '../../context/Context';

function ClientDetails(props) {

  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('acessToken')
    if(!token){
      history.push('/')
    }
  }, [])
  
  const {clients} = useContext(Context);

  const { id } = props.match.params

  const client = clients.find(elem => elem.id === Number(id));
  
  return(
    <DetailsCard client={client} />
  )
}

export default ClientDetails  ;