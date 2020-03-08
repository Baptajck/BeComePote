// == Initial State
const initialState = {
  email: '',
};

// == Types
const CHANGE_INPUT_FORGOTTEN = 'CHANGE_INPUT_FORGOTTEN';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_FORGOTTEN:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

// == Action Creators
export const changeInputForgotten = (name, value) => ({
  type: CHANGE_INPUT_FORGOTTEN,
  name,
  value,
});


// == Selectors


// == Export
export default reducer;
