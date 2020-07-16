import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewCharacterForm(props){
  const {setForm, visibleForm} = props
  const firestore = useFirestore();

  function addCharacterToFirestore(event) {
    event.preventDefault();
    setForm(!visibleForm);
    return firestore.collection('characters').add(
      {
        characterName: event.target.characterName.value,
        characterRace: event.target.characterRace.value,
        characterClass: event.target.characterClass.value,
        characterLvl: parseInt(event.target.characterLvl.value),
        characterStr: parseInt(event.target.characterStr.value),
        characterDex: parseInt(event.target.characterDex.value),
        characterCon: parseInt(event.target.characterCon.value),
        characterInt: parseInt(event.target.characterInt.value),
        characterWis: parseInt(event.target.characterWis.value),
        characterCha: parseInt(event.target.characterCha.value)
      }
    );
  }
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addCharacterToFirestore}
        buttonText="Add Character" />
    </React.Fragment>
  );
}

NewCharacterForm.propTypes = {
  onNewCharacterCreation: PropTypes.func
}

export default NewCharacterForm