import React from 'react';
import PropTypes from 'prop-types';
import {Banner, LargeText, MediumText } from '../styled/SharedStyles';


function Character(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCharacterClicked(props.id)}>
        <Banner>{props.characterName}</Banner>
        <LargeText>{props.characterRace}</LargeText>
        <LargeText>{props.characterClass}</LargeText>
        <LargeText>{props.characterLvl}</LargeText>
      </div>
    </React.Fragment>
  )
}

Character.propTypes ={
  characterName: PropTypes.string,
  id: PropTypes.string
};

export default Character