/* eslint-disable no-console */
import axios, { AxiosError } from 'axios';
import {
  GET_PROFILE, showProfile, EDIT_PROFILE, DELETE_PROFILE, GET_QUESTIONS, showQuestions,
} from 'src/store/reducers/profile';
import { showDeleteProfile } from 'src/store/reducers/forms/connexion';

const profileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILE: {
      const state = store.getState();
      const {
        firstname, lastname, pseudo, presentation, age,
      } = state.forgottenPassword;
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:3000/api/user', {
        firstname,
        lastname,
        pseudo,
        age,
        presentation,
      })
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
        firstname, lastname, pseudo, presentation, age,
      } = state.profile;
      axios.defaults.withCredentials = true;
      axios.patch('http://localhost:3000/api/user/edit', {
        firstname,
        lastname,
        pseudo,
        age,
        presentation,
      })
        .then(() => {})
        .catch(() => (
          AxiosError
        ));
      break;
    }
    case DELETE_PROFILE: {
      axios.defaults.withCredentials = true;
      axios.delete('http://localhost:3000/api/user/delete')
        .then(() => {
          store.dispatch(showDeleteProfile());
        })
        .catch(() => (
          AxiosError
        ));
      break;
    } case GET_QUESTIONS: {
      // const state = store.getState();
      // const {
      //   firstname, lastname, pseudo, presentation, age,
      // } = state.forgottenPassword;
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:3000/api/allQuestions')
        .then((response) => {
          console.log(response);
          const save = showQuestions(response.data);
          store.dispatch(save);
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
