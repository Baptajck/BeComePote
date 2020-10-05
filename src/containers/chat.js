// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ChatRoom from 'src/components/ChatRoom';
import { messageTyped, addMessage, getMessages } from 'src/store/reducers/chat';

// Action Creators
const mapStateToProps = (state) => ({
  messages: state.chat.messages,
  chatMessage: state.chat.chatMessage,
  sessionUserId: state.connexion.sessionUserId,
});

const mapDispatchToProps = (dispatch) => ({
  newMessage: (value) => {
    const action = messageTyped(value);
    dispatch(action);
  },

  submitMessage: () => {
    const action = addMessage();
    dispatch(action);
  },

  fetchMessages: () => {
    const action = getMessages();
    dispatch(action);
  },
});

// Container
const chat = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatRoom);

// == Export
export default chat;
