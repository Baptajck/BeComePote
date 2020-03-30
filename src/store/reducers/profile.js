// == Initial State
const initialState = {
  firstname: 'Fanny',
  lastname: 'Ardent',
  pseudo: 'Fanfan',
  presentation: 'Présentez-vous en quelques mots ...',
  isInEditMode: false,
  isFailEdit: false,
  oldValueFirstname: '',
  oldValueLastname: '',
  oldValuePseudo: '',
  oldValuePresentation: '',
};

// == Types
const CHANGE_INPUT_PROFILE = 'CHANGE_INPUT_PROFILE';
const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE';
const UPDATE_INPUT_VALUE_FIRSTNAME = 'UPDATE_INPUT_VALUE_FIRSTNAME';
const UPDATE_INPUT_VALUE_LASTNAME = 'UPDATE_INPUT_VALUE_LASTNAME';
const UPDATE_INPUT_VALUE_PSEUDO = 'UPDATE_INPUT_VALUE_PSEUDO';
const UPDATE_INPUT_VALUE_PRESENTATION = 'UPDATE_INPUT_VALUE_PRESENTATION';
const CLOSE_FIRSTNAME = 'CLOSE_FIRSTNAME';
const CLOSE_LASTNAME = 'CLOSE_LASTNAME';
const CLOSE_PSEUDO = 'CLOSE_PSEUDO';
const CLOSE_PRESENTATION = 'CLOSE_PRESENTATION';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  // console.log(state);
  console.log(action);
  switch (action.type) {
    case CHANGE_INPUT_PROFILE:
      return {
        ...state,
        [action.name]: action.value,
        isFailEdit: false,
      };
    case CHANGE_EDIT_MODE:
      return {
        ...state,
        isInEditMode: !state.isInEditMode,
      };
    // Button Update Input
    case UPDATE_INPUT_VALUE_FIRSTNAME:
      return {
        ...state,
        isInEditMode: false,
        firstname: state.firstname,
        oldValueFirstname: state.firstname,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_LASTNAME:
      return {
        ...state,
        isInEditMode: false,
        lastname: state.lastname,
        oldValueLastname: state.lastname,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_PSEUDO:
      return {
        ...state,
        isInEditMode: false,
        pseudo: state.pseudo,
        oldValuePesudo: state.pseudo,
        isFailEdit: false,
      };
    case UPDATE_INPUT_VALUE_PRESENTATION:
      return {
        ...state,
        isInEditMode: false,
        presentation: state.presentation,
        oldValuePresentation: state.presentation,
        isFailEdit: false,
      };
    // Button Close
    case CLOSE_FIRSTNAME:
      return {
        ...state,
        isInEditMode: !state.isInEditMode,
        isFailEdit: false,
        firstname: state.oldValueFirstname,
      };
    case CLOSE_LASTNAME:
      return {
        ...state,
        isInEditMode: !state.isInEditMode,
        isFailEdit: false,
        lastname: state.oldValueLastname,
      };
    case CLOSE_PSEUDO:
      return {
        ...state,
        isInEditMode: !state.isInEditMode,
        isFailEdit: false,
        pseudo: state.oldValuePseudo,
      };
    case CLOSE_PRESENTATION:
      return {
        ...state,
        isInEditMode: !state.isInEditMode,
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


export const changeEditMode = () => ({
  type: CHANGE_EDIT_MODE,
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
