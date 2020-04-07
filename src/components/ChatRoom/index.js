// == Import : npm
import React, { useEffect, useRef } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { FaRegPaperPlane } from 'react-icons/fa';

// == Import : local
import './chatRoom.scss';
import MessageList from './MessageList';

// == Composant
const ChatRoom = () => {
  // const chatZone = useRef(null);

  // useEffect(
  //   () => {
  //     chatZone.current.scrollBy(0, chatZone.current.scrollHeight);
  //   },
  // );

  return (
    <div className="chatroom">
      <div className="chatroom-container">
        <div className="chatroom-header">
          <IoIosArrowRoundBack className="chatroom-header-arrow" />
          <img src="https://i.imgur.com/HgoCwpu.png" title="chatroom header" alt="header" className="chatroom-header-image" />
          <h1 className="chatroom-header-title">Chat avec Fanny</h1>
        </div>
        <div className="chatroom-messages-container">
          <MessageList />
        </div>
        <div className="chatroom-reply-container">
          <form action="#0" className="chatroom-reply-form">
            <input
              type="text"
              className="chatroom-reply-input"
              placeholder="&nbsp;envoyer un message..."
            />
            <button type="button" title="envoyer un message" className="chatroom-reply-button">
              <i type="button" className="chatroom-reply-icon">
                <FaRegPaperPlane />
              </i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


// == Export
export default ChatRoom;
