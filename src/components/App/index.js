/* eslint-disable no-console */
// == Import : npm
import React, { useEffect } from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
// == STATIC
import ScrollToTop from 'src/components/ScrollToTop';
import HomePage from 'src/components/HomePage';
import ChatRoom from 'src/components/ChatRoom';
import Search from 'src/components/Search';
import Error404 from 'src/components/Error404';
import Spinner from 'src/components/Spinner';
import Navigation from 'src/components/Navigation';

// == CONTAINERS
import SignUp from 'src/containers/forms/signUp';
import SignIn from 'src/containers/forms/signIn';
import ForgottenPassword from 'src/containers/forms/forgottenPassword';
import NewPassword from 'src/containers/forms/newPassword';
import Profile from 'src/containers/profile';

// == Composant
const App = ({ getHome, isConnected, loading }) => {
  const changeTitle = () => {
    switch (window.location.pathname) {
      case '/forgottenPassword':
        document.title = 'Mot de passe oublié | BeComePote';
        break;
      case '/chatroom':
        document.title = 'Chat | BeComePote';
        break;
      case '/connect':
        document.title = 'Se connecter | BeComePote';
        break;
      case '/create':
        document.title = 'S\'inscrire | BeComePote';
        break;
      case '/profile':
        document.title = 'Profil | BeComePote';
        break;
      case '/search':
        document.title = 'Rechercher | BeComePote';
        break;
      case '/':
        document.title = 'Accueil | BeComePote';
        break;
      default:
        document.title = 'BeComePote';
    }
  };
  // TODO Fixer le bug de changeTitle()
  useEffect(() => {
    changeTitle();
  });

  useEffect(() => {
    setTimeout(() => {
      getHome();
    }, 1000);
  }, []);

  return (
    <div>
      {loading && (<Spinner />)}
      <ScrollToTop />
      {!loading && (
      <Switch>
        <Route exact path="/forgottenPassword">
          <ForgottenPassword />
        </Route>
        <Route exact path="/connect">
          {isConnected ? <Redirect to="/chatroom" /> : <SignIn />}
        </Route>
        <Route exact path="/create">
          {isConnected ? <Redirect to="/profile" /> : <SignUp />}
        </Route>
        <Route exact path="/newPassword/:userId/:token">
          <NewPassword />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        {isConnected && (
        <>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/chatroom">
            <ChatRoom />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Navigation />
        </>
        )}
        <Route>
          <Error404 />
        </Route>
      </Switch>
      )}
    </div>
  );
};
App.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  getHome: PropTypes.func.isRequired,
};

// == Export
export default App;
