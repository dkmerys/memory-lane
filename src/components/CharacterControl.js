import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import NewCharacterForm from './NewCharacterForm';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail'

function CharacterControl(){
  let currentlyVisibleState = null
  let buttonText = null
  const [visibleForm, setForm] = useState(false);
  const [selectedCharacterId, setSelectedCharacter] = useState(null)


  
  if (selectedCharacterId !== null){
    currentlyVisibleState = <CharacterDetail 
                            selectedCharacter={selectedCharacterId} />
    buttonText = "Return To Character List"
  } else if (visibleForm === true){
    currentlyVisibleState = <NewCharacterForm 
                            setForm={setForm} 
                            visibleForm={visibleForm} />
    buttonText = "View Characters"
  } else {
    currentlyVisibleState = <CharacterList
                            setSelectedCharacter={setSelectedCharacter}
                            selectedCharacter={selectedCharacterId} />
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