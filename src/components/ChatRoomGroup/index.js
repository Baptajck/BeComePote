// == Import : npm
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { NavLink } from 'react-router-dom';

// == Import : local
import './chatRoomGroup.scss';


// == Composant
const ChatRoomGroup = () => {
  const truncStr = (string, limit) => (string.length > limit
    ? `${string
      .trim()
      .substring(0, limit - 3)
      .trim()}...`
    : string);

  const [persons, setUsers] = useState([]);
  const usersInfos = () => {
    axios.get('http://localhost:3000/api/users')
    .then((res) => {
      console.log(res);
      setUsers(res.data);
    })
    .catch(() => (
      AxiosError
    ));
  }

   /**
   * Récupération de la date pour changer son format et le mettre au format français
   * @param  {String} reviewDate
   * @returns  {String} reviewDateFormated
   */
  const formatDate = (reviewDate) => {
    const options = {
      weekday: 'long', day: 'numeric',
    };
    const timestamp = Date.parse(reviewDate);
    const timestampToDate = new Date(timestamp);
    const reviewDateFormated = timestampToDate.toLocaleDateString('en-GB');
    return reviewDateFormated;
  };

  useEffect(() => {
    usersInfos();
  }, [])

  return (
    <div className="container-chatroom">
      {persons.map(({ id, pseudo, avatar, presentation, updated_at }) => (
        <NavLink key={id} to={`chatroom/${id}/${pseudo}`} className="link-chatroom">
          <img src={avatar} alt="profil" className="chatroom-avatar" />
          <div className="group-text">
            {/*
            <p className="chatroom-pseudo">{truncStr(pseudo, 30)}</p>
            <p className="chatroom text">{truncStr(text, 45)}</p>
            */}
            <div className="chatroom-group-info">
              <p className="chatroom-pseudo">{pseudo}</p>
              <p className="chatroom-date">{formatDate(updated_at)}</p>
            </div>
            <p className="chatroom text">{truncStr(presentation, 45)}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

// == Export
export default ChatRoomGroup;
