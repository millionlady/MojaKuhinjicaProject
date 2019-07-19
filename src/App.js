import React from 'react';
import Home from './views/Home';
import Profile from './views/Profile';
import Recipe from './views/Recipe';
import Upload from './views/Upload';
import './style/global.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (


    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/recipe' component={Recipe} />
          <Route path='/upload' component={Upload} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;
