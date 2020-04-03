/* eslint-disable no-console */
import axios from 'axios';
import { GET_PROFILE, showProfile, EDIT_PROFILE } from 'src/store/reducers/profile';

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
          // console.log(response);
          const save = showProfile(response.data);
          store.dispatch(save);
        })
        .catch((error) => {
          console.error(error);
          console.log(error.response);
        });
      break;
    }
    case EDIT_PROFILE: {
      const state = store.getState();
      const {
        firstname, lastname, pseudo, presentation 
      } = state.profile;
      const { user } = state.connexion;
      const userId = user.session.user.id;
      axios.patch(`http://localhost:3000/api/user/${userId}/edit`, {
        firstname,
        lastname,
        pseudo,
        presentation,
      }, { credentials: 'true' })
        .then(() => {
          // console.log(response);
        })
        .catch(() => {
          // console.error(error);
          // console.log(error.response);
        });
      break;
    }
    default:
      next(action);
  }
};

export default profileMiddleware;
