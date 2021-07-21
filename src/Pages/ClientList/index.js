import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Header, StickyHeadTable } from '../../Components';


function ClientList() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('acessToken')
    if(!token){
      history.push('/')
    }
  }, [])

  return(
    <div>
      <Header />
      <StickyHeadTable />
    </div>
  )
}

export default ClientList;
