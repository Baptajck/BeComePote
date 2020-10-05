import React, { useRef, useEffect, useState } from 'react';
import { MdSend, MdClose } from 'react-icons/md';
import { IoIosChatbubbles } from 'react-icons/io';
// import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ChatApp.scss';

const ChatApp = ({
  chatMessage,
  newMessage,
  submitMessage,
  fetchMessages,
  messages,
  sessionUserId,
}) => {
  const chatZone = useRef(null);

  // on crée une fonction utilitaire réutilisable pour voir si on est l'auteur
  const isMe = (messageUserId, sessionUserId) => messageUserId === sessionUserId;

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    chatZone.current.scrollBy(0, chatZone.current.scrollHeight);
  });

  const handleChange = (event) => {
    const { value } = event.target;
    newMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitMessage();
  };

  const [maximizeChat = false, setMaximizeChat] = useState('');
  const [statusChat = false, setStatusChat] = useState('');

  const handleClickWidget = () => (maximizeChat ? (setMaximizeChat(false), setStatusChat(false)) : (setMaximizeChat(true), setStatusChat(true)));

  return (
    <div>
      <div className={
        classNames(
          { chat: true },
          { 'chat-minimize': !maximizeChat },
        )
      }
      >
        <div className={
          classNames(
            { 'chat-display': maximizeChat },
            { 'chat-display-none': !maximizeChat },
          )
        }
        >
          <div className="chat-title">Chat</div>
          <div ref={chatZone} className="chat-body">
            {messages.map((state, id) => {
              const itsMe = isMe(state.user[0].id, sessionUserId);
              console.log('>> MEssage Content: ', isMe(state.user[0].id, sessionUserId));
              return (
                <div
                  key={id} 
                  className={
                    classNames(
                      'chat-body-message',
                      { 'chat-body-message--not-mine': !itsMe },
                    )
                  }
                >
                  <div className="chat-body-message-author">{state.user[0].pseudo}</div>
                  <p className="chat-body-message-content">{state.message_content}</p>
                </div>
              );
            })}
          </div>
          <div className="chat-footer">
            <form
              className="chat-footer-form"
              onSubmit={handleSubmit}
            >
              <input
                // value={/* une valeur venant du state */}
                // onChange={/* émettre une changement dans le state */}
                onChange={handleChange}
                value={chatMessage}
                className="chat-footer-form-input"
                placeholder="Partage ta réaction"
              />
              <button className="chat-footer-form-submit" type="submit">
                <MdSend />
              </button>
            </form>
          </div>
        </div>
      </div>
      {!statusChat && <div onClick={handleClickWidget} className="chat-widget"><IoIosChatbubbles /></div>}
      {statusChat && <div onClick={handleClickWidget} className="chat-widget"><MdClose /></div>}
    </div>
  );
};

// ChatApp.propTypes = {
//   sessionUserId: PropTypes.number.isRequired,
//   fetchMessages: PropTypes.func.isRequired,
//   chatMessage: PropTypes.string,
//   newMessage: PropTypes.func.isRequired,
//   submitMessage: PropTypes.func.isRequired,
//   messages: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       content: PropTypes.string.isRequired,
//       createdAt: PropTypes.string.isRequired,
//       user: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         handle: PropTypes.string.isRequired,
//       }).isRequired,
//     }),
//   ).isRequired,
// };

// ChatApp.defaultProps = {
//   chatMessage: '',
// };

export default ChatApp;
