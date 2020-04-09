/* eslint-disable no-console */
import axios from 'axios';
import { CHANGE_PASSWORD, RESET_PASSWORD, messageSendMail } from 'src/store/reducers/forms/forgottenPassword';

// const { PORT_BACK, HOST } = process.env;
function resetPassword(store, userId, token) {
  const state = store.getState();
  const { password } = state.forgottenPassword;
  axios.post(`http://localhost:3000/email/newPasswordReset/${userId}/${token}`, { password }, { credentials: 'true' })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}

const passwordMiddleware = (store) => (next) => (action) => {
  // console.log('Je suis le middleware: ', action);
  switch (action.type) {
    case CHANGE_PASSWORD: {
      const state = store.getState();
      const { email } = state.forgottenPassword;
      // axios.defaults.withCredentials = true;
      axios.post(`http://localhost:3000/email/user/${email}`, {
        email,
      }, { credentials: 'true' })
        .then((response) => {
          store.dispatch(messageSendMail(response.data));
          // const messageSend = messageSendMail(response.data);
          // store.dispatch(messageSend);
        })
        .catch((error) => {
          store.dispatch(messageSendMail(error.response.data));
        });
      break;
    }
    case RESET_PASSWORD: {
      resetPassword(store, action.userId, action.token);
      break;
    }
    default:
      next(action);
  }
};

export default passwordMiddleware;
