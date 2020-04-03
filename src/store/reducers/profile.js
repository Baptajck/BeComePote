// == Initial State
const initialState = {
  // id: 0,
  // firstname: '',
  // lastname: '',
  // pseudo: '',
  // presentation: '',
  isInEditModeFirstname: false,
  isInEditModeLastname: false,
  isInEditModePseudo: false,
  isInEditModePresentation: false,
  isFailEdit: false,
  oldValueFirstname: '',
  oldValueLastname: '',
  oldValuePseudo: '',
  oldValuePresentation: '',
  // profile: [],
};

// == Types
const CHANGE_INPUT_PROFILE = 'CHANGE_INPUT_PROFILE';
const CHANGE_EDIT_MODE_FIRSTNAME = 'CHANGE_EDIT_MODE_FIRSTNAME';
const CHANGE_EDIT_MODE_LASTNAME = 'CHANGE_EDIT_MODE_LASTNAME';
const CHANGE_EDIT_MODE_PSEUDO = 'CHANGE_EDIT_MODE_PSEUDO';
const CHANGE_EDIT_MODE_PRESENTATION = 'CHANGE_EDIT_MODE_PRESENTATION';
const UPDATE_INPUT_VALUE_FIRSTNAME = 'UPDATE_INPUT_VALUE_FIRSTNAME';
const UPDATE_INPUT_VALUE_LASTNAME = 'UPDATE_INPUT_VALUE_LASTNAME';
const UPDATE_INPUT_VALUE_PSEUDO = 'UPDATE_INPUT_VALUE_PSEUDO';
const UPDATE_INPUT_VALUE_PRESENTATION = 'UPDATE_INPUT_VALUE_PRESENTATION';
const CLOSE_FIRSTNAME = 'CLOSE_FIRSTNAME';
const CLOSE_LASTNAME = 'CLOSE_LASTNAME';
const CLOSE_PSEUDO = 'CLOSE_PSEUDO';
const CLOSE_PRESENTATION = 'CLOSE_PRESENTATION';
// == Récupération du back
export const GET_PROFILE = 'GET_PROFILE';
const SHOW_PROFILE = 'SHOW_PROFILE';
export const EDIT_PROFILE = 'EDIT_PROFILE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_PROFILE:
      return {
        ...state,
        [action.name]: action.value,
        isFailEdit: false,
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
        oldValuePesudo: state.pseudo,
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

export const changeEditModeFirstname = () => ({
  type: CHANGE_EDIT_MODE_FIRSTNAME,
});
export const changeEditModeLastname = () => ({
  type: CHANGE_EDIT_MODE_LASTNAME,
});
export const changeEditModePseudo = () => ({
  type: CHANGE_EDIT_MODE_PSEUDO,
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

export const closePresentation = () => ({
  type: CLOSE_PRESENTATION,
});
// == Selectors

// == Export
export default reducer;
