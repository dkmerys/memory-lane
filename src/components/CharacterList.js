import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Character from './Character'

function CharacterList(props){
  useFirestoreConnect([
    {collection: 'characters' }
  ]);
  const characters = useSelector(state => state.firestore.ordered.characters);
  if (isLoaded(characters)){
    const {setSelectedCharacter, selectedCharacterId} = props
    return(
      <React.Fragment>
        {characters.map((character) => {
          return <Character
          whenCharacterClicked = {setSelectedCharacter}
          characterName={character.characterName}
          characterRace={character.characterRace}
          characterClass={character.characterClass}
          characterLvl={character.characterLvl}
          characterStr={character.characterStr}
          characterDex={character.characterDex}
          characterCon={character.characterCon}
          characterInt={character.characterInt}
          characterWis={character.characterWis}
          characterCha={character.characterCha}
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
