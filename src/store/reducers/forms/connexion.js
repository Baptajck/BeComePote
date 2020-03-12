// == Initial State
const initialState = {
  email: '',
  password: '',
  pseudo: '',
  confirmPassword: '',
  isConnected: false,
  loading: true,
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
const STOP_LOADING = 'STOP_LOADING';

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
        loading: true,
        isConnected: true,
        user: action.user,
      };
    case CONNECT_USER_SIGN_IN:
      return {
        ...state,
        loading: true,
        isConnected: true,
        user: action.user,
      };
    case SHOW_HOME:
      return {
        ...state,
        loading: true,
        isConnected: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
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

// == SPINNER
export const stopLoading = () => ({
  type: STOP_LOADING,
});

// == Export
export default reducer;
