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
      console.log('Je veux envoyer un message dans la BDD');
      const state = store.getState();
      const userId = state.connexion.sessionUserId;
      const message_content = state.chat.chatMessage;

      console.log('>> New Message: ', message_content);
      socket.emit('send_message', message_content);
      axios.post('http://localhost:3000/api/addMessage',{
        message_content
      })
        .then((response) => {
          console.log('Le message a bien été enregistré dans la BDD', response);
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
          console.log('Je récupère l\'historique de tous les messages du chat', response.data);
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
        // console.log(message);
        store.dispatch(receiveMessage(message));
      });

      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleware;
