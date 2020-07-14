import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function NewCharacterForm(props){

  const firestore = useFirestore();

  function addCharacterToFirestore(event) {
    event.preventDefault();
    // props.onNewCharacterCreation();
    return firestore.collection('characters').add(
      {
        characterName: event.target.characterName.value,
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