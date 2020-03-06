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
const SAVE_USER = 'SAVE_USER';
// const SAVE_NEW_USER = 'SAVE_NEW_USER';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        isConnected: true,
        user: action.user,
      };
    // case SAVE_NEW_USER:
    //   return {
    //     ...state,
    //     isConnected: true,
    //     // newUser: action.newUser,
    //   };
    default:
      return state;
  }
};

// == Action Creators
export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export const createUser = () => ({
  type: CREATE_USER,
});

// export const saveNewUser = (newUser) => ({
//   type: SAVE_NEW_USER,
//   newUser,
// });

// == Selectors


// == Export
export default reducer;
