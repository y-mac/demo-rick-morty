import React, {Fragment, useState} from 'react';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';
import { Input } from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const SearchHolder = styled.div`
  width:250px;
  position: relative;
`;

const SeachBox = styled.section`
  width: 100%;
  position: absolute;
  background: white;
  top: 100%;
  left:0;
  padding:0.5em;
  box-sizing: border-box; 
  z-index: 100;
`;

const SearchRow = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin: 0.5em 0;
`;

const SearchFigure = styled.figure`
  width:120px;
  padding:0;
  margin:0;
`;

const SearchTitle = styled.h5`
  text-align: center;
  width: calc(100% - 120px);
`;



const SectionSearch = (props) => {
  const {characters} = props
  const { Search } = Input;  

  const [searchCoincidences, setSearchCoincidences] = useState([]);
 
  const onSearch = value => console.log(value);  
  

  const filterCoincidences = (value) => {
      if(value.length > 3) {
         const newArray = characters[0].filter(character => {
           return character['name'].includes(value); 
         });
         setSearchCoincidences(newArray);
      } else {
        setSearchCoincidences([]);  
      }
  }

  
  return (  
    <Fragment>
      <SearchHolder>
      <Search 
        placeholder="Buscar" 
        onChange={(e)=>{
          filterCoincidences(e.target.value);
        }}
        onSearch={onSearch} 
        enterButton   
        style={{ width: 200, margin: '0 10px' }}
      />
      {searchCoincidences.length > 0 ? (
        <SeachBox>
          {
            searchCoincidences.map(coincidence => (
              <SearchRow>
                 <SearchFigure>
                   <Link to={`/single/${coincidence.id}`}>   
                    <img src={coincidence.image} className="searchImg"/>
                   </Link>
                 </SearchFigure> 
                 <SearchTitle>
                   <Link to={`/single/${coincidence.id}`}>    
                    {coincidence.name}
                   </Link>    
                 </SearchTitle>
              </SearchRow>      
            ))
          }
        </SeachBox>

      ):null}
      </SearchHolder>        
      
    </Fragment>       
  );
}

const mapStateToProps = state => {
  return{
    characters: state.characters  
  } 
}

export default connect(mapStateToProps,null)(SectionSearch);