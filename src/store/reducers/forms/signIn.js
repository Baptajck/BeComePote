// == Initial State
const initialState = {
  email: '',
  password: '',
};

// == Types
const CHANGE_INPUT_SIGN_IN = 'CHANGE_INPUT_SIGN_IN';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_SIGN_IN:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

// == Action Creators
export const changeInputSignIn = (name, value) => ({
  type: CHANGE_INPUT_SIGN_IN,
  name,
  value,
});


// == Selectors


// == Export
export default reducer;
