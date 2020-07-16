import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CharacterControl from './CharacterControl'
import Header from './Header';
import Signin from './Signin';
import firebase from '../firebase';
import 'firebase/auth';


function App() {
  // firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     var email = user.email;
//     var uid = user.uid
//     console.log(email)
//     console.log (uid)
//   } else {
//   }
// })
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
