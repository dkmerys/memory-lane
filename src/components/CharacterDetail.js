import React from 'react';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded, useFirestore } from 'react-redux-firebase';
import 'firebase/firestore';

function CharacterDetail(props) {
  const { selectedCharacter } = props
  console.log(selectedCharacter)

  const firestore = useFirestore();

  const firestoreCharacter = firestore.get({ collection: 'characters', doc: selectedCharacter }).then((character) => {
    const firestoreCharacterInternal = {
      name: character.get('characterName'),
      id: character.id
    }
    return firestoreCharacterInternal
  })

  return (
    <React.Fragment>
      <h1>Witness Me!</h1>
      <p>{firestoreCharacter.name}</p>
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object
}

export default CharacterDetail