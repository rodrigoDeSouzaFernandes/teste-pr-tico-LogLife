import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import { Header } from '../../Components'

import { HomeContainer } from './styles'

function Home() {
  
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('acessToken')
    if(!token){
      history.push('/')
    }
  }, [])
  
  return (
    <HomeContainer >
      <Header />
    </HomeContainer>
  )
}

export default Home;