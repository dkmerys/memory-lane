import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterControl from './CharacterControl'
import Header from './Header';
import Signin from './Signin'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/'>
          <CharacterControl />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
