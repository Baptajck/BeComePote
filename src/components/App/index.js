// == Import : npm
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
import ScrollToTop from 'src/components/ScrollToTop';
import HomePage from 'src/components/HomePage';

import SignUp from 'src/containers/forms/signUp';
import SignIn from 'src/containers/forms/signIn';
import ForgottenPassword from 'src/containers/forms/forgottenPassword';

// == Composant
const App = ({ isConnected }) => (
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

App.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};

// == Export
export default App;
