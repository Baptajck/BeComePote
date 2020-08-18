// == Import : npm
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { IoIosChatbubbles } from "react-icons/io";
// == Import : local
import './search.scss';

// == Composant
const Search = () => {
  const [details, setDetails] = useState([]);
  const [user, setUser] = useState([]);
  const sendDetails = () => {
    axios.get('http://localhost:3000/api/selectedResponse')
    .then((res) => {
      setDetails(res.data);
    })
    .catch(() => (
      AxiosError
    ));
  }
  const userInfo = () => {
    axios.get('http://localhost:3000/api/user')
    .then((res) => {
      setUser(res.data[0]);
      console.log(user);
    })
    .catch(() => (
      AxiosError
    ));
  }
  
  useEffect(() => {
    sendDetails();
    userInfo();
  }, [])
  
  return (
    <div className="search">
      <div className="search-profile">
        <img src={user.avatar} alt="Photo_avatar" className="search-profile-image"/>
        <div className="search-profile-options">
          <h1 className="search-profile-options-nickname">{user.pseudo}</h1>
          <button type="button" className="search-profile-options-button" title="Lancez votre conversation !"><IoIosChatbubbles /></button>
        </div>
      </div>
      <div className="search-profile-description">
          <p>{user.presentation}</p>
      </div>
      <hr className="search-profile-separation" />
      <div className="search-profile-description-questions">
        {details.map(({ question_content, choice_content, question_id }) => (
          <div key={question_id}>
            <p className="search-profile-description-questions-content">
              {question_content}
            </p>
            <ul className="search-profile-description-questions-reply-bullet">
              <li className="search-profile-description-questions-reply">
                {choice_content}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


// == Export
export default Search;
