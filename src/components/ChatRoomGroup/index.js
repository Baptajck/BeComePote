// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './chatRoomGroup.scss';
import persons from './data';
// import ChatRoom from 'src/components/ChatRoom';


// == Composant
const ChatRoomGroup = () => {
  const truncStr = (string, limit) => (string.length > limit
    ? `${string
      .trim()
      .substring(0, limit - 3)
      .trim()}...`
    : string);

  return (
    <div className="container-chatroom">
      {persons.map(({ id, pseudo, text }) => (
        <NavLink key={id} to={`chatroom/${id}/${pseudo}`} className="link-chatroom">
          <img src="https://i.imgur.com/HgoCwpu.png" alt="profil" className="chatroom-avatar" />
          <div className="group-text">
            <p className="chatroom-pseudo">{truncStr(pseudo, 30)}</p>
            <p className="chatroom text">{truncStr(text, 45)}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

// == Export
export default ChatRoomGroup;
