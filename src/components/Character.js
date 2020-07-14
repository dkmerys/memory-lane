import React from 'react';
import PropTypes from 'prop-types';

function Character(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCharacterClicked(props.id)}>
        <h1>{props.characterName}</h1>
      </div>
    </React.Fragment>
  )
}

Character.propTypes ={
  characterName: PropTypes.string,
  id: PropTypes.string
};

export default Character