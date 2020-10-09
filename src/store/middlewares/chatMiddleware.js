import axios, { AxiosError } from 'axios';
import io from 'socket.io-client';

import {
  WEB_SOCKET,
  ADD_MESSAGE,
  GET_MESSAGES,
  displayMessages,
  receiveMessage,
} from 'src/store/reducers/chat';


var socket = io.connect('http://localhost:5000');


const chatMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const state = store.getState();
      const userId = state.connexion.sessionUserId;
      const message_content = state.chat.chatMessage;

      axios.post('http://localhost:3000/api/addMessage',{
        message_content
      })
        .then((response) => {
          const { pseudo, avatar, id } = JSON.parse(localStorage.getItem('User_Session'));
          const newMessage = {
            id: response.data.chat_message_id,
            message_content: message_content,
            created_at: new Date(),
            user: [
            {
              'id': id,
              'pseudo': pseudo,
              'avatar': avatar,
            }
          ]}
          socket.emit('send_message', newMessage);
        })
        .catch((error) => {
          AxiosError || console.log(error);
        });

      next(action);
      break;
    }
    case GET_MESSAGES: {
      axios.get('http://localhost:3000/api/getMessages')
        .then((response) => {
          const messageAction = displayMessages(response.data);
          store.dispatch(messageAction);
        })
        .catch((error) => {
          console.log('error', error);
        });
      next(action);
      break;
    }
    case WEB_SOCKET: {
      socket.on('send_message', (message) => {
        store.dispatch(receiveMessage(message));
      });

      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleware;
