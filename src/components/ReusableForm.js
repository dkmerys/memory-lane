import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Button, Input } from '../styled/SharedStyles';

function ReusableForm(props){
  return(
    <React.Fragment>
      <form onSubmit ={props.formSubmissionHandler}>
        <Input
          type='text'
          name='characterName'
          placeholder='Character Name' />
        <Input
          type='text'
          name='characterClass'
          placeholder='Character Class' />
        <Input
          type='text'
          name='characterRace'
          placeholder='Character Race' />
        <Input
          type='number'
          name='characterLvl'
          placeholder='Character Level' />
        <Input
          type='number'
          name='characterStr'
          placeholder='Strength' />
        <Input
          type='number'
          name='characterDex'
          placeholder='Dexterity' />
        <Input
          type='number'
          name='characterCon'
          placeholder='Constitution' />
        <Input
          type='number'
          name='characterInt'
          placeholder='Intelligence' />
        <Input
          type='number'
          name='characterWis'
          placeholder='Wisdom' />
        <Input
          type='number'
          name='characterCha'
          placeholder='Charisma' />
          <Button type='submit'>{props.buttonText}</Button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;