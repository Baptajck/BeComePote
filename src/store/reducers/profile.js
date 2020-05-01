// == Initial State
const initialState = {
  profile: {},
  isInEditModeFirstname: false,
  isInEditModeLastname: false,
  isInEditModePseudo: false,
  isInEditModeAge: false,
  isInEditModePresentation: false,
  isFailEdit: false,
  oldValueFirstname: '',
  oldValueLastname: '',
  oldValuePseudo: '',
  oldValueAge: '',
  oldValuePresentation: '',
  questions: {},
  choices: {},
  testBody1: +null,
  testBody2: +null,
  testBody3: +null,
  show: false,
  mounted: false,
  fileUpload: {},
};

// == Types
const CHANGE_INPUT_PROFILE = 'CHANGE_INPUT_PROFILE';
const CHANGE_EDIT_MODE_FIRSTNAME = 'CHANGE_EDIT_MODE_FIRSTNAME';
const CHANGE_EDIT_MODE_LASTNAME = 'CHANGE_EDIT_MODE_LASTNAME';
const CHANGE_EDIT_MODE_PSEUDO = 'CHANGE_EDIT_MODE_PSEUDO';
const CHANGE_EDIT_MODE_AGE = 'CHANGE_EDIT_MODE_AGE';
const CHANGE_EDIT_MODE_PRESENTATION = 'CHANGE_EDIT_MODE_PRESENTATION';
const UPDATE_INPUT_VALUE_FIRSTNAME = 'UPDATE_INPUT_VALUE_FIRSTNAME';
const UPDATE_INPUT_VALUE_LASTNAME = 'UPDATE_INPUT_VALUE_LASTNAME';
const UPDATE_INPUT_VALUE_PSEUDO = 'UPDATE_INPUT_VALUE_PSEUDO';
const UPDATE_INPUT_VALUE_AGE = 'UPDATE_INPUT_VALUE_AGE';
const UPDATE_INPUT_VALUE_PRESENTATION = 'UPDATE_INPUT_VALUE_PRESENTATION';
const CLOSE_FIRSTNAME = 'CLOSE_FIRSTNAME';
const CLOSE_LASTNAME = 'CLOSE_LASTNAME';
const CLOSE_PSEUDO = 'CLOSE_PSEUDO';
const CLOSE_AGE = 'CLOSE_AGE';
const CLOSE_PRESENTATION = 'CLOSE_PRESENTATION';
// == Récupération du back
export const GET_PROFILE = 'GET_PROFILE';
const SHOW_PROFILE = 'SHOW_PROFILE';
// == Edit son profil
export const EDIT_PROFILE = 'EDIT_PROFILE';
// == Delete son profil
export const DELETE_PROFILE = 'DELETE_PROFILE';
// == Récupération des questions
export const GET_QUESTIONS = 'GET_QUESTIONS';
const SHOW_QUESTIONS = 'SHOW_QUESTIONS';
// == Gestions des réponse aux questions
export const SUBMIT_QUESTIONS = 'SUBMIT_QUESTIONS';
const SHOW_RESPONSES = 'SHOW_RESPONSES';
const GET_ID_OPTIONS = 'GET_ID_OPTIONS';
// == PROMPT
const SHOW_PROMPT = 'SHOW_PROMPT';
export const SHOW_PROMPT_CANCEL = 'SHOW_PROMPT_CANCEL';
// == Récupération des réponses
export const GET_CHOICES = 'GET_CHOICES';
const SHOW_CHOICES = 'SHOW_CHOICES';
// == Edit son avatar
export const TEST = 'TEST';
export const EDIT_PROFILE_AVATAR = 'EDIT_PROFILE_AVATAR';

export const CANCEL_MOUNTED = 'CANCEL_MOUNTED';


// == Reducer
const reducer = (state = initialState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_INPUT_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.name]: action.value,
        },
        // [action.name]: action.value,
        isFailEdit: false,
      };
    case TEST:
      return {
        ...state,
        fileUpload: action.fileUpload,
      };
    case SHOW_CHOICES:
      return {
        ...state,
        choices: action.choices,
      };
    case SHOW_PROMPT:
      return {
        ...state,
        show: true,
      };
    case SHOW_PROMPT_CANCEL:
      return {
        ...state,
        show: false,
      };
    case SHOW_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      };
    case SHOW_PROFILE:
      return {
        ...state,
        profile: action.profile[0],
        // ...action.profile[0],
      };
    // Changement de vision
    case CHANGE_EDIT_MODE_FIRSTNAME:
      return {
        ...state,
        isInEditModeFirstname: !state.isInEditModeFirstname,
      };
    case CHANGE_EDIT_MODE_LASTNAME:
      return {
        ...state,
        isInEditModeLastname: !state.isInEditModeLastname,
      };
    case CHANGE_EDIT_MODE_PSEUDO:
      return {
        ...state,
        isInEditModePseudo: !state.isInEditModePseudo,
      };
    case CHANGE_EDIT_MODE_AGE:
      return {
        ...state,
        isInEditModeAge: !state.isInEditModeAge,
      };
    case CHANGE_EDIT_MODE_PRESENTATION:
      return {
        ...state,
        isInEditModePresentation: !state.isInEditModePresentation,
      };
    // Button Update Input
    case UPDATE_INPUT_VALUE_FIRSTNAME:
      return {
        ...state,
        isInEditModeFirstname: false,
        firstname: state.profile.firstname,
        oldValueFirstname: state.profile.firstname,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_LASTNAME:
      return {
        ...state,
        isInEditModeLastname: false,
        lastname: state.profile.lastname,
        oldValueLastname: state.profile.lastname,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_PSEUDO:
      return {
        ...state,
        isInEditModePseudo: false,
        pseudo: state.profile.pseudo,
        oldValuePseudo: state.profile.pseudo,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_AGE:
      return {
        ...state,
        isInEditModeAge: false,
        age: state.profile.age,
        oldValueAge: state.profile.age,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_PRESENTATION:
      return {
        ...state,
        isInEditModePresentation: false,
        presentation: state.profile.presentation,
        oldValuePresentation: state.profile.presentation,
        isFailEdit: false,
      };
    // Button Close
    case CLOSE_FIRSTNAME:
      return {
        ...state,
        isInEditModeFirstname: !state.isInEditModeFirstname,
        isFailEdit: false,
        profile: {
          ...state.profile,
          firstname: state.oldValueFirstname,
        },
      };
    case CLOSE_LASTNAME:
      return {
        ...state,
        isInEditModeLastname: !state.isInEditModeLastname,
        isFailEdit: false,
        profile: {
          ...state.profile,
          lastname: state.oldValueLastname,
        },
      };
    case CLOSE_PSEUDO:
      return {
        ...state,
        isInEditModePseudo: !state.isInEditModePseudo,
        isFailEdit: false,
        profile: {
          ...state.profile,
          pseudo: state.oldValuePseudo,
        },
      };
    case CLOSE_AGE:
      return {
        ...state,
        isInEditModeAge: !state.isInEditModeAge,
        isFailEdit: false,
        profile: {
          ...state.profile,
          age: state.oldValueAge,
        },
      };
    case CLOSE_PRESENTATION:
      return {
        ...state,
        isInEditModePresentation: !state.isInEditModePresentation,
        isFailEdit: false,
        profile: {
          ...state.profile,
          presentation: state.oldValuePresentation,
        },
      };
    case SHOW_RESPONSES:
      return {
        ...state,
        mounted: true,
        responses: action.responses,
      };
    case CANCEL_MOUNTED:
      return {
        ...state,
        mounted: false,
      };
    case GET_ID_OPTIONS:
      return {
        ...state,
        [action.name]: action.id,
      };
    default:
      return state;
  }
};

// == Action Creators
export const changeInputProfile = (name, value) => ({
  type: CHANGE_INPUT_PROFILE,
  name,
  value,
});
// == Pouvoir éditer son avatar
export const editProfileAvatar = () => ({
  type: EDIT_PROFILE_AVATAR,
});
export const test = (fileUpload) => ({
  type: TEST,
  fileUpload,
});

export const getChoices = () => ({
  type: GET_CHOICES,
});
export const showChoices = (choices) => ({
  type: SHOW_CHOICES,
  choices,
});
export const cancelMounted = () => ({
  type: CANCEL_MOUNTED,
});
// == Prompt
export const showPrompt = () => ({
  type: SHOW_PROMPT,
});
export const showPromptCancel = () => ({
  type: SHOW_PROMPT_CANCEL,
});
// == Récupération des questions
export const getQuestions = () => ({
  type: GET_QUESTIONS,
});
export const showQuestions = (questions) => ({
  type: SHOW_QUESTIONS,
  questions,
});
// == Récupération des data du back
export const getProfile = () => ({
  type: GET_PROFILE,
});

export const showProfile = (profile) => ({
  type: SHOW_PROFILE,
  profile,
});

// == Tout concernant les questionsexport
export const getIdOptions = (name, id) => ({
  type: GET_ID_OPTIONS,
  name,
  id,
});

export const submitQuestions = () => ({
  type: SUBMIT_QUESTIONS,
});

export const showResponses = (responses) => ({
  type: SHOW_RESPONSES,
  responses,
});

// == Pouvoir éditer son profil
export const editProfile = () => ({
  type: EDIT_PROFILE,
});

// == Pouvoir supprimer son profil
export const deleteProfile = () => ({
  type: DELETE_PROFILE,
});

// == Autres
export const changeEditModeFirstname = () => ({
  type: CHANGE_EDIT_MODE_FIRSTNAME,
});
export const changeEditModeLastname = () => ({
  type: CHANGE_EDIT_MODE_LASTNAME,
});
export const changeEditModePseudo = () => ({
  type: CHANGE_EDIT_MODE_PSEUDO,
});
export const changeEditModeAge = () => ({
  type: CHANGE_EDIT_MODE_AGE,
});
export const changeEditModePresentation = () => ({
  type: CHANGE_EDIT_MODE_PRESENTATION,
});
// saved button
export const updateInputValueFirstname = () => ({
  type: UPDATE_INPUT_VALUE_FIRSTNAME,
});

export const updateInputValueLastname = () => ({
  type: UPDATE_INPUT_VALUE_LASTNAME,
});

export const updateInputValuePseudo = () => ({
  type: UPDATE_INPUT_VALUE_PSEUDO,
});

export const updateInputValueAge = () => ({
  type: UPDATE_INPUT_VALUE_AGE,
});

export const updateInputValuePresentation = () => ({
  type: UPDATE_INPUT_VALUE_PRESENTATION,
});

// closed button
export const closeFirstname = () => ({
  type: CLOSE_FIRSTNAME,
});

export const closeLastname = () => ({
  type: CLOSE_LASTNAME,
});

export const closePseudo = () => ({
  type: CLOSE_PSEUDO,
});

export const closeAge = () => ({
  type: CLOSE_AGE,
});

export const closePresentation = () => ({
  type: CLOSE_PRESENTATION,
});
// == Selectors

// == Export
export default reducer;
