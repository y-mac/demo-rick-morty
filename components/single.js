import React, {Fragment,useState,useEffect} from 'react';
import Header from './header';

const Single = (props) => {
    const [singleData, setSingleData] = useState({});
    var episodes = 0 ;
    const handelGetSingleData = async () => {
      console.log('id',props.match.params.itemId);  
      const url = `https://rickandmortyapi.com/api/character/${props.match.params.itemId}`;
      try{
        const  response = await fetch(url);
        const data = await response.json();
        episodes =  data.episode.lenght;
        setSingleData(data);
      } catch (error) {
        console.log(error);  
      }
    }
    useEffect(()=>{
      handelGetSingleData();
    },[props.match.params.itemId]);

    console.log('data',singleData);
    
    return ( 
      <Fragment>
        <Header />  
        <article class="characters-card"> 
          <section className="cardLeft">
            <figure>
              <img src={singleData.image} />    
            </figure>  
            <h1> {singleData.name} </h1> 
          </section>
          <section className="cardRight">
            {/* <h3> Episodes: <span> {episodes} </span></h3> */}
            <h3> Status: <span> {singleData.status} </span> </h3>
            <h3> Species: <span> {singleData.species} </span> </h3>
            <h3> Gender: <span> {singleData.gender} </span> </h3>
            {/* <h3> Origin: <span> {singleData[origin].name} </span> </h3>
            <h3> Last Location: <span> {singleData[location].name} </span> </h3> */}
          </section>
        </article>
      </Fragment>  
    );
}
 
export default Single;