import React from 'react';
import PropTypes from 'prop-types';

function Character(props){
  return (
    <React.Fragment>
      <div>
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