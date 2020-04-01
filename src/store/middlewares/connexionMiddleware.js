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
      axios.defaults.withCredentials = true;
      if (password === confirmPassword) {
        axios.post('http://localhost:3000/api/register', {
          pseudo, email, password,
        })
          .then((response) => {
            const save = saveUserSignUp(response.data);
            store.dispatch(save);
            console.log(response);
          })
          .catch((error) => {
            // console.error(error);
            const actionError = errorMessage(error.response.data);
            store.dispatch(actionError);
          })
          .finally(() => {
            const actionStopLoading = stopLoading();
            setTimeout(() => {
              store.dispatch(actionStopLoading);
            }, 1000);
          });
      }
      break;
    }
    case CONNECT_USER: {
      const state = store.getState();
      const { email, password } = state.connexion;
      axios.defaults.withCredentials = true;
      axios.post('http://localhost:3000/api/connect', {
        email,
        password,
      })
        .then((response) => {
          console.log(response);
          const actionSaveUser = connectUserSignIn(response.data);
          store.dispatch(actionSaveUser);
        })
        .catch((error) => {
          // console.error(error);
          const actionError = errorMessage(error.response.data);
          store.dispatch(actionError);
        })
        .finally(() => {
          const actionStopLoading = stopLoading();
          setTimeout(() => {
            store.dispatch(actionStopLoading);
          }, 1000);
        });
      break;
    }
    case GET_HOME: {
      // const state = store.getState();
      // const { isConnected } = state.connexion;
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:3000/api/checkToken')
        .then((res) => {
          const save = showHome(res.data);
          store.dispatch(save);
        })
        .catch((err) => (
          // console.error('connexionMiddleware', err)
          AxiosError
        ))
        .finally(() => {
          const actionStopLoading = stopLoading();
          store.dispatch(actionStopLoading);
        });
      break;
    }
    case GET_LOGOUT: {
      const state = store.getState();
      const { isConnected } = state.connexion;
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:3000/api/logout')
        .then((res) => {
          console.log(res);
          const save = showLogout(res.data);
          store.dispatch(save);
        })
        .catch((err) => {
          console.error(err);
          return isConnected;
        })
        .finally(() => {
          const actionStopLoading = stopLoading();
          store.dispatch(actionStopLoading);
        });
      break;
    }
    default:
      next(action);
  }
};

export default connexionMiddleware;
