import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Admin from './Admin/Admin';
import Root from './Root';
import Callback from './Callback/Callback';

export const makeMainRoutes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Root} />
          <Route path='/home' component={App} />
          <Route path='/calendar' component={App}/>
          <Route path='/admin' component={Admin} />
          <Route path='/callback' component={Callback}/>
        </Switch>
    </Router>
  );
}
