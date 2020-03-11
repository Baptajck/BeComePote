/* eslint-disable no-console */
import axios from 'axios';

import {
  CREATE_USER, saveUserSignUp, CONNECT_USER, connectUserSignIn,
} from 'src/store/reducers/forms/signUp';

const connexionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const state = store.getState();
      const {
        pseudo, email, password, confirmPassword,
      } = state.signUp;

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
            console.error(error);
          });
      }
      break;
    }
    case CONNECT_USER: {
      const state = store.getState();
      const { email, password } = state.signUp;
      axios.post('http://localhost:3000/api/connect', {
        email,
        password,
      })
        .then((response) => {
          const actionSaveUser = connectUserSignIn(response.data);
          store.dispatch(actionSaveUser);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default connexionMiddleware;
