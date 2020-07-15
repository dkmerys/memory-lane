import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withFirestore, isLoaded, useFirestore, useFirestoreConnect} from 'react-redux-firebase';
import 'firebase/firestore';

function CharacterDetail(props) {
  const { setSelectedCharacter, selectedCharacter, editing, setEditing} = props
  console.log(selectedCharacter)
  const firestore = useFirestore();
  useFirestoreConnect([
    { 
      collection: 'characters',
      doc: selectedCharacter
    }
  ]);

  const handleDeletingCharacter = (selectedCharacter) => {
    firestore.delete({collection:
    'characters',
    doc: selectedCharacter});
    setSelectedCharacter(null)
  }
  
  const character = useSelector(
    ({ firestore: { data } }) => data.characters && data.characters[selectedCharacter]
  ) 
  return ( 
    <React.Fragment>
      <h1>Witness Me!</h1>
      <h1>Character Name: {character.characterName}</h1>
      <button onClick={ () => setEditing(!editing)}>Edit Character</button>
      <button onClick={ () => handleDeletingCharacter(selectedCharacter)}>Delete Character</button>
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object
}

export default CharacterDetail