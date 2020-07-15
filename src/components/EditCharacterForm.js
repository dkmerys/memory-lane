import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import { useFirestore } from 'react-redux-firebase';

function EditCharacterForm(props){
  const { setForm, visibleForm, selectedCharacter, setEditing, editing } = props;
  const firestore = useFirestore();
  console.log(selectedCharacter);
  function handleEditCharacterFormSubmission(event) {
    event.preventDefault();
    setForm(!visibleForm);
    setEditing(!editing);
    const propertiesToUpdate = {
                                characterName: event.target.characterName.value
    }
    return firestore.update({ collection: 'characters', doc: selectedCharacter}, propertiesToUpdate)
  }

  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCharacterFormSubmission}
        buttonText="Update Character" />
    </React.Fragment>
  );
}

EditCharacterForm.propTypes ={ 
  setForm: PropTypes.func,
  visibleForm: PropTypes.bool,
  selectedCharacter: PropTypes.string
}

export default EditCharacterForm;