// == Initial State
const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  user2: [],
};

// == Types
const CHANGE_INPUT_FORGOTTEN = 'CHANGE_INPUT_FORGOTTEN';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
const TEST = 'TEST';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_FORGOTTEN:
      return {
        ...state,
        [action.name]: action.value,
      };
    case TEST:
      return {
        ...state,
        user2: action.user2,
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

export const changePassword = () => ({
  type: CHANGE_PASSWORD,
});

export const resetPassword = (userId, token) => ({
  type: RESET_PASSWORD,
  userId,
  token,
});

// == Selectors


// == Export
export default reducer;
