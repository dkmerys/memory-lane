import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import NewCharacterForm from './NewCharacterForm';
import CharacterList from './CharacterList';

function CharacterControl(){
  let currentlyVisibleState = null
  const [visibleForm, setForm] = useState(true);
  
  if (visibleForm === true){
    currentlyVisibleState = <NewCharacterForm />
  }else{
    currentlyVisibleState = <CharacterList />
  }
  
  return(
    <React.Fragment>
      {currentlyVisibleState}
      {/* <button onClick={setForm}>{buttonText}</button> */}
    </React.Fragment>
  )
}

export default CharacterControl;