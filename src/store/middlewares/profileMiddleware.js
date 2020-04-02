/* eslint-disable no-console */
import axios from 'axios';
import { GET_PROFILE, showProfile } from 'src/store/reducers/profile';

// const getProfile = (store, userId) => {
//   const state = store.getState();
//   const {
//     firstname, lastname, pseudo, presentation,
//   } = state.forgottenPassword;
//   const { user } = state.connexion;
//   const userId = user.session.user.id;
//   axios.get(`http://localhost:3000/user/${userId}`, {
//     firstname,
//     lastname,
//     pseudo,
//     presentation,
//   }, { credentials: 'true' })
//     .then((response) => {
//       console.log(response);
//       const save = showProfile(response.data);
//       store.dispatch(save);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

const profileMiddleware = (store) => (next) => (action) => {
  // console.log('Je suis le middleware: ', action);
  switch (action.type) {
    case GET_PROFILE: {
      const state = store.getState();
      const {
        firstname, lastname, pseudo, presentation,
      } = state.forgottenPassword;
      const { user } = state.connexion;
      const userId = user.session.user.id;
      axios.get(`http://localhost:3000/api/user/${userId}`, {
        firstname,
        lastname,
        pseudo,
        presentation,
      }, { credentials: 'true' })
        .then((response) => {
          console.log(response);
          const save = showProfile(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
          console.log(error.response);
        });
      break;
    }
    default:
      next(action);
  }
};

export default profileMiddleware;