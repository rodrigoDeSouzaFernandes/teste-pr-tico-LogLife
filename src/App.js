import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom';
import { Reset } from 'styled-reset'

import Login from './Pages/Login';
import theme from './theme'
import Provider from './context/Provider'
import Home from './Pages/Home';
import ClientRegister from './Pages/ClientRegister';
import ClientList from './Pages/ClientList';


function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Reset />
        <Switch>
          <Route exact path='/' component={ Login } />
          <Route exact path='/home' component={ Home } />
          <Route exact path='/register' component={ ClientRegister } />
          <Route exact path='/clients-list' component={ ClientList } />
        </Switch>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
