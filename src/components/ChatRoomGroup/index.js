// == Import : npm
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { NavLink } from 'react-router-dom';

// == Import : local
import './chatRoomGroup.scss';


// == Composant
const ChatRoomGroup = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    axios.get('http://localhost:3000/api/allCategories')
    .then((res) => {
      setCategories(res.data);
    })
    .catch(() => (
      AxiosError
    ));
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <div className="categories">
      {categories.map(({ background, id, category_name }) => (
        <NavLink key={id} to={`chatroom/${id}/${category_name}`} className="category-card">
          <img src={background} alt={category_name} className="category-card-image"/>
          <div className="category-card-options">
            <h1 className="profile-options-nickname category-card-options-name">{category_name}</h1>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

// == Export
export default ChatRoomGroup;
