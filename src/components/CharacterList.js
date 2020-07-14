import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Character from './Character'

function CharacterList(){
  useFirestoreConnect([
    {collection: 'characters' }
  ]);
  const characters = useSelector(state => state.firestore.ordered.characters);
  if (isLoaded(characters)){
    return(
      <React.Fragment>
        {characters.map((character) => {
          return <Character
          // whenCharacterClicked = {props.onCharacterSelection}
          characterName={character.characterName}
          id={character.id}
          key={character.id}/>
        })}
      </React.Fragment>
    )
  } else {
    return(
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  }
}


export default CharacterList
