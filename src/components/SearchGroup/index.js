// == Import : npm
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { NavLink } from 'react-router-dom';
import { MdAdd } from "react-icons/md";
// == Import : local
import './searchGroup.scss';

// == Composant
const SearchGroup = () => {
  const [users, setUsers] = useState([]);

  const usersInfos = () => {
    axios.get('http://localhost:3000/api/users')
    .then((res) => {
      setUsers(res.data);
    })
    .catch(() => (
      AxiosError
    ));
  }
  
  useEffect(() => {
    usersInfos();
  }, [])
  console.log(users);
  return (
    <div className="searchGroup">
      {
        users.map(({avatar, pseudo, id}) => (
          <div key={id} className="profile-card">
            <img src={avatar} alt="Photo_avatar" className="profile-card-image"/>
            <div className="search-profile-options profile-card-options">
            <h1 className="profile-options-nickname profile-card-options-nickname">{pseudo}</h1>
            <NavLink to={`search/${pseudo}/${id}`} className="search-profile-options-button profile-card-options-button" title="Voir le profil"><MdAdd /></NavLink>
            </div>
          </div>
        ))
      }
    </div>
  );
}


// == Export
export default SearchGroup;
