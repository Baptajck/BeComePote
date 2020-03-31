/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
// == Import : npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import : local
import './navigation.scss';
import logo from './Logo_BeComePote_v3.png';

// == Composant
const Navigation = () => (
    <nav className="navbar" role="navigation">
    <ul className="navbar-nav">
      <img src={logo} alt="logo" className="navbar-img" />
      <li className="navbar-nav-item" activeclassname="active">
        <NavLink to="/search" className="navbar-nav-link">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-inline--fa fa-search fa-w-18 fa-9x"
          >
            <path
              d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14V14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
              fill="currentColor"
              className="navbar-nav-fa-secondary"
            />
          </svg>
          <span className="navbar-nav-link-text">Recherche</span>
        </NavLink>
      </li>

      <li className="navbar-nav-item" activeclassname="active">
        <NavLink to="/chatroom" className="navbar-nav-link">
          <svg
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-inline--fa fa-message fa-w-18 fa-9x"
          >
              <path
                d="M20 2.5H4C2.9 2.5 2.01 3.4 2.01 4.5L2 22.5L6 18.5H20C21.1 18.5 22 17.6 22 16.5V4.5C22 3.4 21.1 2.5 20 2.5ZM18 14.5H6V12.5H18V14.5ZM18 11.5H6V9.5H18V11.5ZM18 8.5H6V6.5H18V8.5Z"
                fill="currentColor"
                className="navbar-nav-fa-secondary"
              />
          </svg>
          <span className="navbar-nav-link-text">Messages</span>
        </NavLink>
      </li>

      <li className="navbar-nav-item" activeclassname="active">
        <NavLink to="/profile" className="navbar-nav-link">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-inline--fa fa-book fa-w-16 fa-5x"
          >
            <path
              d="M18 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM6 4H11V12L8.5 10.5L6 12V4Z"
              fill="currentColor"
              className="navbar-nav-fa-secondary"
            />
          </svg>
          <span className="navbar-nav-link-text">Profil</span>
        </NavLink>
      </li>
    </ul>
    </nav>
);

// == Export
export default Navigation;
