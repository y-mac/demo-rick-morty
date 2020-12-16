import React, {Fragment} from 'react';
import {HashRouter,Route,Switch } from 'react-router-dom';                                         
import Home from '../components/home';
import Single from '../components/single';

const App = () => (
  <Fragment>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/single/:itemId" component={Single} />  
      </Switch>
    </HashRouter>
  </Fragment>
);

export default App;