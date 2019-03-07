import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from './pages/Home/HomePage';
import { SignIn } from './pages/Account/LoginPage';
import { VisitsPage } from './pages/Visits/VisitsPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={SignIn} exact />
        <Route path="/visits" component={VisitsPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    );
  }
}

export default App;
