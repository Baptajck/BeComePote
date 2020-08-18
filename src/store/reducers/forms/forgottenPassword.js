// == Initial State
const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  isNewPasswordShown: false,
  isNewConfirmPasswordShown: false,
  messageSend: '',
};

// == Types
const CHANGE_INPUT_FORGOTTEN = 'CHANGE_INPUT_FORGOTTEN';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';
const MESSAGE_SEND_MAIL = 'MESSAGE_SEND_MAIL';

const NEW_PASSWORD_VISIBILITY = 'NEW_PASSWORD_VISIBILITY';
const NEW_PASSWORD_CONFIRM_VISIBILITY = 'NEW_PASSWORD_CONFIRM_VISIBILITY';
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
    case NEW_PASSWORD_VISIBILITY:
      return {
        ...state,
        isNewPasswordShown: !state.isNewPasswordShown,
      };
    case NEW_PASSWORD_CONFIRM_VISIBILITY:
      return {
        ...state,
        isNewConfirmPasswordShown: !state.isNewConfirmPasswordShown,
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

// == Show password
export const newPasswordVisibility = () => ({
  type: NEW_PASSWORD_VISIBILITY,
});

export const newConfirmPasswordVisibility = () => ({
  type: NEW_PASSWORD_CONFIRM_VISIBILITY,
});
// == Selectors


// == Export
export default reducer;
