// - initialState
const initialState = {
  messages: [],
  chatMessage: '',
};

// - Actions Types
export const GET_MESSAGES = 'GET_MESSAGES';
const MESSAGE_TYPED = 'MESSAGE_TYPED';
export const DISPLAY_MESSAGES = 'DISPLAY_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const WEB_SOCKET = 'WEB_SOCKET';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

// - Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MESSAGE_TYPED:
      return {
        ...state,
        chatMessage: action.value,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        chatMessage: '',
      };
    case DISPLAY_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message,
        ],
      };
    default:
      return state;
  }
};

// - Actions Creators
export const messageTyped = (value) => ({
  type: MESSAGE_TYPED,
  value,
});

export const displayMessages = (messages) => ({
  type: DISPLAY_MESSAGES,
  messages,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const getMessages = () => ({
  type: GET_MESSAGES,
});

export const websocketConnect = () => ({
  type: WEB_SOCKET,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

// - Selectors

// - Export
export default reducer;
