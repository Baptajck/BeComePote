/* eslint-disable no-console */
import axios, { AxiosError } from 'axios';
import {
  GET_PROFILE, showProfile, EDIT_PROFILE, DELETE_PROFILE,
} from 'src/store/reducers/profile';
import { showDeleteProfile } from 'src/store/reducers/forms/connexion';

const profileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILE: {
      const state = store.getState();
      const {
        firstname, lastname, pseudo, presentation,
      } = state.forgottenPassword;
      axios.get('http://localhost:3000/api/user', {
        firstname,
        lastname,
        pseudo,
        presentation,
      }, { credentials: 'true' })
        .then((response) => {
          const save = showProfile(response.data);
          store.dispatch(save);
        })
        .catch(() => (
          AxiosError
        ));
      break;
    }
    case EDIT_PROFILE: {
      const state = store.getState();
      const {
        firstname, lastname, pseudo, presentation,
      } = state.profile;
      axios.patch('http://localhost:3000/api/user/edit', {
        firstname,
        lastname,
        pseudo,
        presentation,
      }, { credentials: 'true' })
        .then(() => {})
        .catch(() => (
          AxiosError
        ));
      break;
    }
    case DELETE_PROFILE: {
      axios.delete('http://localhost:3000/api/user/delete', { credentials: 'true' })
        .then(() => {
          store.dispatch(showDeleteProfile());
        })
        .catch(() => (
          AxiosError
        ));
      break;
    }
    default:
      next(action);
  }
};

export default profileMiddleware;
