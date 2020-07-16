import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { withFirestore, isLoaded, useFirestore, useFirestoreConnect} from 'react-redux-firebase';
import 'firebase/firestore';
import styled from 'styled-components';
import { Banner, Button, LargeText, MediumText } from '../styled/SharedStyles';

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
      <Banner>Witness Me!</Banner>
      <Banner>Character Name: {character.characterName}</Banner>
      <LargeText>Race: {character.characterRace}</LargeText>
      <LargeText>Class: {character.characterClass}</LargeText>
      <LargeText>Level: {character.characterLvl}</LargeText>
      <MediumText>STR: {character.characterStr}</MediumText>
      <MediumText>DEX: {character.characterDex}</MediumText>
      <MediumText>CON: {character.characterCon}</MediumText>
      <MediumText>INT: {character.characterInt}</MediumText>
      <MediumText>WIS: {character.characterWis}</MediumText>
      <MediumText>CHA: {character.characterCha}</MediumText>
      <Button onClick={ () => setEditing(!editing)}>Edit Character</Button>
      <Button onClick={ () => handleDeletingCharacter(selectedCharacter)}>Delete Character</Button>
    </React.Fragment>
  );
}

CharacterDetail.propTypes = {
  character: PropTypes.object
}

export default CharacterDetail