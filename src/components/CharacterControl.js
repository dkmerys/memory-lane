import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import NewCharacterForm from './NewCharacterForm';
import CharacterList from './CharacterList';

function CharacterControl(){
  let currentlyVisibleState = null
  let buttonText = null
  const [visibleForm, setForm] = useState(false);
  
  if (visibleForm === true){
    currentlyVisibleState = <NewCharacterForm 
    setForm={setForm} visibleForm={visibleForm}/>
    buttonText = "View Characters"
  } else {
    currentlyVisibleState = <CharacterList />
    buttonText = "Add Character"
  }
  
  return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={ () => setForm(!visibleForm)}>{buttonText}</button>
    </React.Fragment>
  )
}

export default CharacterControl;