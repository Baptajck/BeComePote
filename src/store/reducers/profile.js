// == Initial State
const initialState = {
  firstname: 'Fanny',
  isInEditMode: false,
  test: true,
  currentValue: '',
};

// == Types
const CHANGE_INPUT_PROFILE = 'CHANGE_INPUT_PROFILE';
const CHANGE_EDIT_MODE = 'CHANGE_EDIT_MODE';
const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
const CLOSE = 'CLOSE';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  console.log(state);
  console.log('je suis l\'action', action.type);
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
        currentValue: state.firstname,
        test: false,
      };
    case CLOSE:
      return {
        ...state,
        isInEditMode: !state.isInEditMode,
        currentValue: state.firstname,
        test: false,
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

export const close = () => ({
  type: CLOSE,
});

// == Selectors


// == Export
export default reducer;
