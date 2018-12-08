import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Root from './Root';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';

const auth = new Auth();

export const makeMainRoutes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Root} />
          <Route path='/home' component={Home} />
          <Route path='/callback' component={Callback}/>
        </Switch>
    </Router>
  );
}
