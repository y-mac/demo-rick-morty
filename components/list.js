import React, {Fragment,useEffect,useState} from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import getData from '../utils/getData';
import {setCharacters} from '../actions';
import {connect} from 'react-redux';


const ListHolder = styled.div`
  width: 90%;
  max-width: 1000px;
  margin: 1em auto;
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  grid-gap: 1em;
`;

const ListItem = styled.article`
  padding: 0 0.5em;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-flow:row wrap;
  align-items: center;
  -webkit-box-shadow: 1px 3px 4px 0px rgba(50, 50, 50, 0.25);
  -moz-box-shadow:    1px 3px 4px 0px rgba(50, 50, 50, 0.25);
   box-shadow:         1px 3px 4px 0px rgba(50, 50, 50, 0.25);  
`;

const ListItemTitle = styled.h4`
 width:100%;
 text-align: center;
 margin: 0.5em 0;
`;



const List = (props) => {
   const {setCharacters} = props;
   const [charactersList, setCharactersList] = useState([]);
   
   const getCharacter = async () => {
     const responseResult = await getData();
     console.log('responseResult',responseResult);
     setCharacters(responseResult.results);
     setCharactersList(responseResult.results);
   };

   useEffect(()=>{
    getCharacter();
   },[]);

    console.log('characters',charactersList);
    return (  
      <Fragment>
        <ListHolder>
            {
              charactersList.map(item=>(
                <ListItem>
                  <figure className="itemFig">
                    <Link to={`/single/${item.id}`} style={{color:'white'}}>
                      <img src={item.image} alt={item.name}/>
                    </Link>
                  </figure>   

                  <ListItemTitle>
                    <Link to={`/single/${item.id}`}>
                      {item.name} 
                    </Link>
                  </ListItemTitle>
                </ListItem>
               )
              )
            } 
          </ListHolder> 
      </Fragment>  
    );
}
 
const mapDispatchToProps =  {
  setCharacters,    
}
 
export default connect(null,mapDispatchToProps)(List);

