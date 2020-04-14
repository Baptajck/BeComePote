// == Initial State
const initialState = {
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
  questions: [],
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

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_PROFILE:
      return {
        ...state,
        [action.name]: action.value,
        isFailEdit: false,
      };
    case SHOW_QUESTIONS:
      return {
        ...state,
        questions: action.questions,
      };
    case SHOW_PROFILE:
      return {
        ...state,
        ...action.profile[0],
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
        firstname: state.firstname,
        oldValueFirstname: state.firstname,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_LASTNAME:
      return {
        ...state,
        isInEditModeLastname: false,
        lastname: state.lastname,
        oldValueLastname: state.lastname,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_PSEUDO:
      return {
        ...state,
        isInEditModePseudo: false,
        pseudo: state.pseudo,
        oldValuePseudo: state.pseudo,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_AGE:
      return {
        ...state,
        isInEditModeAge: false,
        age: state.age,
        oldValueAge: state.age,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_PRESENTATION:
      return {
        ...state,
        isInEditModePresentation: false,
        presentation: state.presentation,
        oldValuePresentation: state.presentation,
        isFailEdit: false,
      };
    // Button Close
    case CLOSE_FIRSTNAME:
      return {
        ...state,
        isInEditModeFirstname: !state.isInEditModeFirstname,
        isFailEdit: false,
        firstname: state.oldValueFirstname,
      };
    case CLOSE_LASTNAME:
      return {
        ...state,
        isInEditModeLastname: !state.isInEditModeLastname,
        isFailEdit: false,
        lastname: state.oldValueLastname,
      };
    case CLOSE_PSEUDO:
      return {
        ...state,
        isInEditModePseudo: !state.isInEditModePseudo,
        isFailEdit: false,
        pseudo: state.oldValuePseudo,
      };
    case CLOSE_AGE:
      return {
        ...state,
        isInEditModeAge: !state.isInEditModeAge,
        isFailEdit: false,
        Age: state.oldValueAge,
      };
    case CLOSE_PRESENTATION:
      return {
        ...state,
        isInEditModePresentation: !state.isInEditModePresentation,
        isFailEdit: false,
        presentation: state.oldValuePresentation,
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
