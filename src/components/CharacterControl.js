import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux'
import NewCharacterForm from './NewCharacterForm';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail'
import EditCharacterForm from './EditCharacterForm';
import firebase from '../firebase';

function CharacterControl(){
  let currentlyVisibleState = null
  let buttonText = null

  const [visibleForm, setForm] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedCharacterId, setSelectedCharacter] = useState(null)

  function returnToList(){
    if (selectedCharacterId !== null) {
      setSelectedCharacter(null);
      setEditing(false);
      setForm(false);
    } else {
      setForm(!visibleForm);
    }
  }

  const user = firebase.auth().currentUser;

  if (user) {
    if (editing === true){
      currentlyVisibleState = <EditCharacterForm
                              editing={editing}
                              setEditing={setEditing}
                              visibleForm={visibleForm}
                              setForm={setForm}
                              selectedCharacter={selectedCharacterId} />
      buttonText = "Return to Character List"
    } else if (selectedCharacterId !== null){
      currentlyVisibleState = <CharacterDetail 
                              setSelectedCharacter = {setSelectedCharacter}
                              selectedCharacter={selectedCharacterId}
                              editing = {editing}
                              setEditing = {setEditing} />
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
        <button onClick={ () => returnToList() }>{buttonText}</button>
      </React.Fragment>
    )
  } else {
    return(
      <div>
        <p>Go fuck yourself</p>
      </div>

    )
  }

  
}

export default withFirestore(CharacterControl);