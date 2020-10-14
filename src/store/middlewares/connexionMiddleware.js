/* eslint-disable no-console */
import axios, { AxiosError } from 'axios';

import {
  CREATE_USER,
  saveUserSignUp,
  CONNECT_USER,
  connectUserSignIn,
  GET_HOME,
  showHome,
  stopLoading,
  errorMessage,
  GET_LOGOUT,
  showLogout,
} from 'src/store/reducers/forms/connexion';


const connexionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const state = store.getState();
      const {
        pseudo, email, password, confirmPassword,
      } = state.connexion;
      if (password === confirmPassword) {
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3000/api/register', {
          pseudo, email, password,
        })
          .then((response) => {
            store.dispatch(saveUserSignUp(response.data));
          })
          .catch((error) => {
            store.dispatch(errorMessage(error.response.data));
          })
          .finally(() => {
            setTimeout(() => {
              store.dispatch(stopLoading());
            }, 1000);
          });
      }
      break;
    }
    case CONNECT_USER: {
      const state = store.getState();
      const { email, password, sessionUserId } = state.connexion;
      axios.defaults.withCredentials = true;
      axios.post('http://localhost:3000/api/connect', {
        email,
        password,
      })
        .then((response) => {
          localStorage.setItem('User_Session', JSON.stringify(response.data.session.user));
          store.dispatch(connectUserSignIn(response.data));
        })
        .catch((error) => {
          store.dispatch(errorMessage(error.response.data));
        })
        .finally(() => {
          setTimeout(() => {
            store.dispatch(stopLoading());
          }, 1000);
        });
      break;
    }
    case GET_HOME: {
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:3000/api/checkToken')
        .then((res) => {
          store.dispatch(showHome(res.data));
        })
        .catch(() => (
          AxiosError
        ))
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    case GET_LOGOUT: {
      const state = store.getState();
      const { isConnected } = state.connexion;
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:3000/api/logout')
        .then((res) => {
          store.dispatch(showLogout(res.data));
        })
        .catch(() => isConnected)
        .finally(() => {
          store.dispatch(stopLoading());
        });
      break;
    }
    default:
      next(action);
  }
};

export default connexionMiddleware;
