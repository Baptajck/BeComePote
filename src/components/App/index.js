/* eslint-disable react/jsx-fragments */
/* eslint-disable no-console */
// == Import : npm
import React, { useState, useEffect } from 'react';
import {
  Switch, Route, Redirect, useLocation,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { useWindowSize } from 'src/utils'

// == Import : local
import './app.scss';
// == STATIC
import ScrollToTop from 'src/components/ScrollToTop';
import HomePage from 'src/components/HomePage';
import ChatRoomGroup from 'src/components/ChatRoomGroup';
import Search from 'src/components/Search';
import SearchGroup from 'src/components/SearchGroup';
import Error404 from 'src/components/Error404';
import Spinner from 'src/components/Spinner';
import Navigation from 'src/components/Navigation';
import DesktopWait from 'src/components/DesktopWait';
import Conditions from 'src/components/Pages/terms.js';
import Mentions from 'src/components/Pages/mentions.js';
import WhoAreWe from 'src/components/Pages/whoarewe.js';

// == CONTAINERS
import SignUp from 'src/containers/forms/signUp';
import SignIn from 'src/containers/forms/signIn';
import ChatRoom from 'src/containers/chat';
import ForgottenPassword from 'src/containers/forms/forgottenPassword';
import NewPassword from 'src/containers/forms/newPassword';
import Profile from 'src/containers/profile';

// == Composant
/**
 * @param  {func} getHome - Function permettant de récupérer les infos d'un utilisateur
 * @param  {bool} isConnected - Booléan permettant de savoir si on est connecté ou pas
 * @param  {bool} loading - Booléan permettant de mettre en route le spinner
 */
const App = ({ getHome, isConnected, loading }) => {
  const { pathname } = useLocation();
  const changeTitle = () => {
    switch (pathname) {
      case '/terms':
        document.title = 'Conditions d\'utilisation | BeComePote';
        break;
      case '/mentions':
        document.title = 'Mentions légales | BeComePote';
        break;
      case '/whoarewe':
        document.title = 'Qui sommes-nous ? | BeComePote';
        break;
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

  useEffect(() => {
    changeTitle();
  });

  useEffect(() => {
    setTimeout(() => {
      getHome();
    }, 1000);
  }, []);

  /**
  * function permettant de voir la largeur/hauteur de la page et de mettre ce que l'on souhaite
  * On peut changer les chiffres pour avoir le rapport qu'on souhaite
  */
const useWindowSize = () => {
    const isSSR = typeof window !== "undefined";
    const [windowSize, setWindowSize] = useState({
      width: isSSR && window.innerWidth,
      height: isSSR && window.innerHeight,
    });

    const changeWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
      window.addEventListener("resize", changeWindowSize);

      return () => {
        window.removeEventListener("resize", changeWindowSize);
      };
    }, []);

    return windowSize;
  }

  const { width } = useWindowSize();

  return (
    <div>
      {loading && (<Spinner />)}
      <ScrollToTop />
      {
        width < 548 ? (
          !loading && (
            <Switch>
              {/* Pages Non-Connectées */}
              <Route path="/terms">
                <Conditions />
              </Route>
              <Route path="/mentions">
                <Mentions />
              </Route>
              <Route path="/whoarewe">
                <WhoAreWe />
              </Route>
              <Route path="/forgottenPassword">
                <ForgottenPassword />
              </Route>
              <Route path="/connect">
                {isConnected ? <Redirect to="/chatroom" /> : <SignIn />}
              </Route>
              <Route path="/create">
                {isConnected ? <Redirect to="/profile" /> : <SignUp />}
              </Route>
              <Route path="/newPassword/:userId/:token">
                <NewPassword />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
              {/* Pages Connectées */}
              <Route path="/profile">
                {isConnected ? <Profile /> : <Redirect to="/" />}
                <Navigation />
              </Route>
              <Route exact path="/chatroom">
                {isConnected ? <ChatRoomGroup /> : <Redirect to="/" />}
                <Navigation />
              </Route>
              <Route exact path="/chatroom/:id/:pseudo">
                {isConnected ? <ChatRoom /> : <Redirect to="/" />}
              </Route>
              <Route path="/searchGroup">
                {isConnected ? <SearchGroup /> : <Redirect to="/" />}
                <Navigation />
              </Route>
              <Route path="/search">
                {isConnected ? <Search /> : <Redirect to="/" />}
                <Navigation />
              </Route>
              <Route path="*">
                <Error404 />
              </Route>
            </Switch>
          )
        ) : (
          !loading && (<DesktopWait />)
        )
      }
      
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
