import axios, { AxiosError } from 'axios';
import {
  GET_PROFILE,
  showProfile,
  EDIT_PROFILE,
  EDIT_PROFILE_AVATAR,
  DELETE_PROFILE,
  GET_QUESTIONS,
  showQuestions,
  SUBMIT_QUESTIONS,
  showResponses,
  showPromptCancel,
  GET_CHOICES,
  showChoices,
  mountedTrue,
  cancelMounted,
  cancelPreviewImage,
} from 'src/store/reducers/profile';
import { showDeleteProfile } from 'src/store/reducers/forms/connexion';

const profileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PROFILE: {
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:3000/api/user')
        .then((response) => {
          store.dispatch(showProfile(response.data));
        })
        .catch(() => (
          AxiosError
        ));
      break;
    }
    case EDIT_PROFILE: {
      const state = store.getState();
      const {
        profile: {
          firstname, lastname, pseudo, presentation, age,
        },
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
    case EDIT_PROFILE_AVATAR: {
      const state = store.getState();
      const {
        fileUpload,
      } = state.profile;

      const formData = new FormData();
      formData.append('image', fileUpload);
      // axios.defaults.withCredentials = true;
      axios.post('http://localhost:3000/api/uploads',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          store.dispatch(mountedTrue());
        })
        .catch(() => (
          AxiosError
        ))
        .finally(() => {
          store.dispatch(cancelPreviewImage());
          store.dispatch(cancelMounted());
        });
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
        ))
        .finally(() => {
          store.dispatch(showPromptCancel());
        });
      break;
    }
    case GET_QUESTIONS: {
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:3000/api/allQuestions')
        .then((response) => {
          store.dispatch(showQuestions(response.data));
        })
        .catch(() => (
          AxiosError
        ));
      break;
    }
    case SUBMIT_QUESTIONS: {
      const state = store.getState();
      const { testBody1, testBody2, testBody3, testBody4 } = state.profile;
      axios.defaults.withCredentials = true;
      axios.post('http://localhost:3000/api/addResponses', {
        testBody1,
        testBody2,
        testBody3,
        testBody4,
      })
        .then((response) => {
          store.dispatch(showResponses(response.data));
        })
        .catch(() => (
          AxiosError
        ))
        .finally(() => {
          store.dispatch(cancelMounted());
        });
      break;
    }
    case GET_CHOICES: {
      axios.defaults.withCredentials = true;
      axios.get('http://localhost:3000/api/selectedResponse')
        .then((response) => {
          store.dispatch(showChoices(response.data));
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
