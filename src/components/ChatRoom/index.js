// == Import : npm
import React, { useEffect, useRef, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { NavLink } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import ChatApp from './ChatApp';

// == Import : local
import './chatApp.scss';

// == Composant
const ChatRoom = ({
  chatMessage,
  newMessage,
  submitMessage,
  fetchMessages,
  messages,
  sessionUserId,
}) => {
  const [category, setCategory] = useState([]);
  const [url, setUrl] = useState("");
  const getCategory = (url) => {
    axios.get(`http://localhost:3000/api/category/${url}`)
    .then((res) => {
      console.log('>> Category: ', res.data);
      setCategory(res.data);
    })
    .catch(() => (
      AxiosError
    ));
  }

  const splitURL = () => {
    const url = document.location.pathname;
    const a = url.split('/');
    setUrl(Number(a[2]));
  };

  useEffect(() => {
    splitURL();
  })

  useEffect(() => {
    getCategory(url);
  }, [url])

  const { category_name, background } = category;

  return (
    <div className="chatroom">
    <ChatApp 
      chatMessage={chatMessage}
      newMessage={newMessage}
      submitMessage={submitMessage}
      fetchMessages={fetchMessages}
      messages={messages}
      sessionUserId={sessionUserId}
      category={category}
      url={url}
    />
      {/* <div className="chatroom-container">
        <div className="chatroom-header">
          <NavLink to={`/chatroom`} className="chatroom-header-arrow">
            <IoIosArrowRoundBack />
          </NavLink>
              <img src={background} title={category_name} alt={category_name} className="chatroom-header-image" />
              <h1 className="chatroom-header-title">Salon : {category_name}</h1>
        </div>
        <div className="chatroom-messages-container">
          <MessageList />
        </div>
        <Field />
      </div> */}
    </div>
  );
};


// == Export
export default ChatRoom;
