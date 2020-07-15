import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withFirestore, isLoaded, useFirestore, useFirestoreConnect} from 'react-redux-firebase';
import 'firebase/firestore';

function CharacterDetail(props) {
  const { selectedCharacter, editing, setEditing} = props
  console.log(selectedCharacter)

  useFirestoreConnect([
    { 
      collection: 'characters',
      doc: selectedCharacter
    }
  ]);

  const character = useSelector(
    ({ firestore: { data } }) => data.characters && data.characters[selectedCharacter]
  ) 
  return ( 
    <React.Fragment>
      <h1>Witness Me!</h1>
      <h1>Character Name: {character.characterName}</h1>
      <button onClick={ () => setEditing(!editing)}>Edit Character</button>
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object
}

export default CharacterDetail