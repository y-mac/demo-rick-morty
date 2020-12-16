import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import SectionSearch from './sectionSearch'

const AppHead = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-flow:row wrap;
  padding: 1em;
  align-items: center;
  -webkit-box-shadow: 1px 3px 4px 0px rgba(50, 50, 50, 0.25);
  -moz-box-shadow:    1px 3px 4px 0px rgba(50, 50, 50, 0.25);
  box-shadow:         1px 3px 4px 0px rgba(50, 50, 50, 0.25);
  background: blue;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem; 
  color: white;
`

const NavBar = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-flow:row wrap;
`;

const Header = (props) => {
    const {poke,setPoke} = props;
    return (  
      <AppHead>
        <Title> 
          <Link to="/" style={{color:'white'}}> Rick & Morty App </Link>
        </Title>
        <SectionSearch />
      </AppHead>
    );
}
 
export default Header;