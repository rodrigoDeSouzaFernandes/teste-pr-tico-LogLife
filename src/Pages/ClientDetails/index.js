import React, { useContext } from 'react';
import DetailsCard from '../../Components/DetailsCard';
import Context from '../../context/Context';

function ClientDetails(props) {
  
  const {clients} = useContext(Context);

  const { id } = props.match.params

  const client = clients.find(elem => elem.id === Number(id));
  
  return(
    <DetailsCard client={client} />
  )
}

export default ClientDetails  ;