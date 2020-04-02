// == Initial State
const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  messageSend: '',
};

// == Types
const CHANGE_INPUT_FORGOTTEN = 'CHANGE_INPUT_FORGOTTEN';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
const MESSAGE_SEND_MAIL = 'MESSAGE_SEND_MAIL';

// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_FORGOTTEN:
      return {
        ...state,
        [action.name]: action.value,
      };
    case MESSAGE_SEND_MAIL:
      return {
        ...state,
        messageSend: action.messageSend,
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

export const messageSendMail = (messageSend) => ({
  type: MESSAGE_SEND_MAIL,
  messageSend,
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
