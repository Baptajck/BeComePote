/* eslint-disable no-console */
// == Import : npm
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import : local
import './app.scss';
// == STATIC
import ScrollToTop from 'src/components/ScrollToTop';
import HomePage from 'src/components/HomePage';
import Profile from 'src/components/Profile';
import ChatRoom from 'src/components/ChatRoom';
import Search from 'src/components/Search';
import PageNotFound from 'src/components/PageNotFound';
import Spinner from 'src/components/Spinner';

// == CONTAINERS
import SignUp from 'src/containers/forms/signUp';
import SignIn from 'src/containers/forms/signIn';
import ForgottenPassword from 'src/containers/forms/forgottenPassword';

// == Composant
class App extends React.Component {
  componentDidMount() {
    const { getHome } = this.props;
    setTimeout(() => {
      getHome();
    }, 2000);
    // getHome();
  }

  render() {
    const { isConnected, loading } = this.props;
    console.log(this.props);
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
            {isConnected ? <Redirect to="/profile" /> : <SignIn />}
          </Route>
          <Route exact path="/create">
            {isConnected ? <Redirect to="/profile" /> : <SignUp />}
          </Route>
          <Route exact path="/">
            {isConnected ? <Redirect to="/profile" /> : <HomePage />}
          </Route>
          {isConnected && (
            <>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/chatroom">
                <ChatRoom />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
            </>
          )}
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
        )}
      </div>
    );
  }
}
App.propTypes = {
  isConnected: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  getHome: PropTypes.func.isRequired,
};

// == Export
export default App;
