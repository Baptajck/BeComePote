/* eslint-disable no-console */
import axios from 'axios';

import { CREATE_USER, saveUser } from 'src/store/reducers/forms/signUp';

const connexionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const state = store.getState();
      const {
        pseudo, email, password, confirmPassword,
      } = state.signUp;

      if (password === confirmPassword) {
        // axios.defaults.withCredentials = true;
        axios.post('http://localhost:3000/api/register', {
          pseudo, email, password,
        })
          .then((response) => {
            const save = saveUser(response.data);
            store.dispatch(save);
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      }
      break;
    }
    default:
      next(action);
  }
};

export default connexionMiddleware;
