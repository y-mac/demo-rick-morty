import React, {Fragment} from 'react';
import Header from './header';
import List from './list';
const Home = () => {
    return (
     <Fragment>
       <Header /> 
       <div>
        <List /> 
       </div>
     </Fragment>
    );
}
 
export default Home;