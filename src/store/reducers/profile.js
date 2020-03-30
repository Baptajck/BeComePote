// == Initial State
const initialState = {
  firstname: 'Fanny',
  lastname: 'Ardent',
  pseudo: 'Fanfan',
  presentation: 'Présentez-vous en quelques mots ...',
  isInEditMode: false,
  collapse1: true,
  collapse2: true,
  collapse3: true,
};

// == Types
const CHANGE_INPUT_PROFILE = 'CHANGE_INPUT_PROFILE';
const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE';
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
const COLLAPSE1 = 'COLLAPSE1';
const COLLAPSE2 = 'COLLAPSE2';
const COLLAPSE3 = 'COLLAPSE3';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case CHANGE_INPUT_PROFILE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case CHANGE_EDIT_MODE:
      return {
        ...state,
        isInEditMode: !state.isInEditMode,
      };
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        isInEditMode: false,
      };
    case COLLAPSE1:
      return {
        ...state,
        collapse1: !state.collapse1,
        [action.id]: state.collapse,
      };
    case COLLAPSE2:
      return {
        ...state,
        collapse2: !state.collapse2,
        [action.id]: state.collapse,
      };
    case COLLAPSE3:
      return {
        ...state,
        collapse3: !state.collapse3,
        [action.id]: state.collapse,
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

export const updateInputValue = () => ({
  type: UPDATE_INPUT_VALUE,
});

export const toggle1 = (id) => ({
  type: COLLAPSE1,
  id,
});

export const toggle2 = (id) => ({
  type: COLLAPSE2,
  id,
});

export const toggle3 = (id) => ({
  type: COLLAPSE3,
  id,
});
// == Selectors

// == Export
export default reducer;
