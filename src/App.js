import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom';
import { Reset } from 'styled-reset'

import Login from './Pages/Login';
import theme from './theme'
import Provider from './context/Provider'


function App() {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Reset />
        <Switch>
          <Route exact path='/' component={ Login } />
        </Switch>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
