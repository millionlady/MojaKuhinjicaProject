import React from 'react';
import Home from './views/Home';
import Profile from './views/Profile';
import Recipe from './views/Recipe';
import Upload from './views/Upload';
import './style/global.scss';
import { configureStore } from './store';

import { Provider } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const { store } = configureStore();

function App() {
  return (

    <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/recipe' component={Recipe} />
            <Route path='/upload' component={Upload} />
          </Switch>
        </div>
      </Router>
    </Provider>


  );
}

export default App;
