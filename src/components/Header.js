import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Banner, Button } from '../styled/SharedStyles'

function Header () {
  return(
    <React.Fragment>
      <Banner>Characters</Banner>
      <Link to='/'><Button>Home</Button></Link>
      <Link to='/signin'><Button>Sign In</Button></Link>
    </React.Fragment>
  );
}

export default Header;