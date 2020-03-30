// == Import : npm
import React from 'react';

// == Import : local
import './chatRoom.scss';
import MessageList from './MessageList';

// == Composant
const ChatRoom = () => (
  <div>
    <h1 className="test">JE SUIS LA PAGE ChatRoom</h1>
    <MessageList />
  </div>
);


// == Export
export default ChatRoom;
