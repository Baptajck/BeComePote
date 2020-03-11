// == Initial State
const initialState = {
  email: '',
  password: '',
  pseudo: '',
  confirmPassword: '',
  isConnected: false,
  user: [],
};

// == Types
const CHANGE_INPUT = 'CHANGE_INPUT';
export const CREATE_USER = 'CREATE_USER';
const SAVE_USER_SIGN_UP = 'SAVE_USER_SIGN_UP';
export const CONNECT_USER = 'CONNECT_USER';
const CONNECT_USER_SIGN_IN = 'CONNECT_USER_SIGN_IN';
export const SHOW_HOME = 'SHOW_HOME';
export const GET_HOME = 'GET_HOME';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER_SIGN_UP:
      return {
        ...state,
        isConnected: true,
        user: action.user,
      };
    case CONNECT_USER_SIGN_IN:
      return {
        ...state,
        isConnected: true,
        user: action.user,
      };
    case SHOW_HOME:
      return {
        ...state,
        isConnected: true,
      };
    default:
      return state;
  }
};

// == Action Creators
// == SIGN UP
export const changeInputSignUp = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const saveUserSignUp = (user) => ({
  type: SAVE_USER_SIGN_UP,
  user,
});

export const createUser = () => ({
  type: CREATE_USER,
});

// == SIGN IN
export const changeInputSignIn = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const connectUserSignIn = (user) => ({
  type: CONNECT_USER_SIGN_IN,
  user,
});

export const connectUser = () => ({
  type: CONNECT_USER,
});

// == HOME
export const showHome = (home) => ({
  type: SHOW_HOME,
  home,
});

export const getHome = () => ({
  type: GET_HOME,
});

// == Export
export default reducer;
