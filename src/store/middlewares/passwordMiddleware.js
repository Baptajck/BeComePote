/* eslint-disable no-console */
import axios from 'axios';
import { CHANGE_PASSWORD } from 'src/store/reducers/forms/forgottenPassword';

// const { PORT_BACK, HOST } = process.env;

const passwordMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware: ', action);
  switch (action.type) {
    case CHANGE_PASSWORD: {
      const state = store.getState();
      const { email } = state.forgottenPassword;
      axios.defaults.withCredentials = true;
      axios.post(`http://localhost:3000/email/user/${email}`, {
        email,
      })
        .then((response) => {
          console.log(response);
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

export default passwordMiddleware;
