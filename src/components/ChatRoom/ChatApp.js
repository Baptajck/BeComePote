import React, { useRef, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { NavLink } from 'react-router-dom';
import {
  format, formatDistance, formatRelative, subDays,
} from 'date-fns';
import { fr } from 'date-fns/locale';
import { MdSend, MdClose } from 'react-icons/md';
import { IoIosChatbubbles, IoIosArrowRoundBack } from 'react-icons/io';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import Spinner from './Spinner';

import './ChatApp.scss';

const ChatApp = ({
  chatMessage,
  newMessage,
  submitMessage,
  fetchMessages,
  messages,
  category,
  url,
  // sessionUserId,
}) => {
  const chatZone = useRef(null);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 500);
    setTimeout(() => {
      fetchMessages();
    }, 100);
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  const handleChange = (event) => {
    const { value } = event.target;
    newMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitMessage();
  };

  const handlePrevent = (event) => {
    event.preventDefault();
  };

  // category
  localStorage.setItem('Category', url);

  // ID de la session du user connecté
  const sessionUserId = +JSON.parse(localStorage.getItem('User_Session')).id;

  // on crée une fonction utilitaire réutilisable pour voir si on est l'auteur
  const isMe = (messageUserId, sessionUserId) => messageUserId === sessionUserId;

  const { category_name, background } = category;

  // Format de la date à partir de l'envoi du message
  const dateChat = (t) => {
    const result = formatDistance(
      new Date(t),
      new Date(),
      { locale: fr }, // Pass the locale as an option
    );
    return result;
  };

  return (
    <div>
      <div className="chatroom-header chatroom-header-backgroundImage" style={{ backgroundImage: `url(${background})` }}>
        <NavLink to="/chatroom" className="chatroom-header-arrow">
          <IoIosArrowRoundBack />
        </NavLink>
        <h1 className="chatroom-header-title">Salon : {category_name}</h1>
        <div className="chatroom-header-overlay" />
      </div>

      {loading && (<Spinner loading={loading} />)}

      {!loading && (
        <div ref={chatZone} className="chat-body">
          {messages.map((state, id) => {
            const itsMe = isMe(state.user[0].id, sessionUserId);
            return (
              <div key={id}>
                <div
                  className={
                    classNames(
                      'chat-body-message',
                      { 'chat-body-message--not-mine': !itsMe },
                    )
                  }
                >
                  <div
                    className={
                      classNames(
                        'chat-group-avatar',
                        { 'chat-group-avatar--not-mine': !itsMe },
                      )
                    }
                  >
                    <div className="chat-body-message-author">{state.user[0].pseudo}</div>
                    <img
                      src={state.user[0].avatar}
                      alt={`Photo_de_profil_de_${state.user[0].pseudo}`}
                      className={
                      classNames(
                        'chatroom-avatar',
                        { 'chatroom-avatar--not-mine': !itsMe },
                      )
                    }
                    />
                  </div>
                  <p
                    className={
                    classNames(
                      'chat-body-message-content',
                      { 'chat-body-message-content--not-mine': !itsMe },
                    )
                  }
                  >
                    {state.message_content}
                  </p>
                </div>
                <p
                  className={
                  classNames(
                    'chat-body-message-date',
                    { 'chat-body-message-date--not-mine': !itsMe },
                  )
                }
                >
                  {`il y a ${dateChat(state.created_at)}`}
                </p>
              </div>
            );
          })}
        </div>
      )}

      <div className="chat-footer">
        <form
          className="chat-footer-form"
          onSubmit={chatMessage.length >= 1 ? handleSubmit : handlePrevent}
        >
          <input
            onChange={handleChange}
            value={chatMessage}
            className="chat-footer-form-input"
            placeholder="message"
          />
          <button className="chat-footer-form-submit" type="submit">
            <MdSend />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatApp;
