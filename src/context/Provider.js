import React, {useState, useEffect} from 'react';
import Context from './Context';

function Provider ({children}) {

  const [users, setUsers] = useState([]);
  const [acessToken, setAcessToken] = useState(null);
  const [clients, setClients] = useState([]);

  useEffect(() => {
      const lsusers = localStorage.getItem('users');
  
      if(lsusers){
        setUsers(JSON.parse(lsusers))
      }
  }, [])

  console.log(users)

  const context = {
    users,
    setUsers,
    acessToken,
    setAcessToken,
    clients,
    setClients,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}

export default Provider;