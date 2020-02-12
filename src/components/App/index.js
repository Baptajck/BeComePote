// == Import : npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// == Import : local
import './app.scss';
import ScrollToTop from 'src/components/ScrollToTop';
import HomePage from 'src/components/HomePage';
import SignUp from 'src/components/SignUp';
import SignIn from 'src/components/SignIn';
import ForgottenPassword from 'src/components/ForgottenPassword';

// == Composant
const App = () => (
  <div>
    <ScrollToTop />
    <Switch>
      <Route exact path="/forgottenPassword">
        <ForgottenPassword />
      </Route>
      <Route exact path="/connect">
        <SignIn />
      </Route>
      <Route exact path="/create">
        <SignUp />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
