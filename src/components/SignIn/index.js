/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMail, IoIosLock } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';

// == Import Local
import './signIn.scss';

const SignIn = () => (
  <div className="signIn">
    <h1 className="signIn-title">Salut !</h1>
    <p className="signIn-subtitle">Connecte toi pour chercher de nouveaux amis sur <strong className="BeComePote">BeComePote</strong>&nbsp;!</p>
    <form className="signIn-form">
      <div className="signIn-form-container">
        <label className="signIn-form-label">
          <IoMdMail /> Email
          <input type="text" name="email" placeholder="Email" className="signIn-form-input" />
        </label>
      </div>
      <div className="signIn-form-container">
        <label className="signIn-form-label">
          <IoIosLock /> Mot de passe
          <input type="password" name="password" placeholder="Mot de passe" className="signIn-form-input" />
        </label>
      </div>
      <NavLink to="/forgottenPassword" className="signIn-form-forgottenPassword">Mot de passe oublié</NavLink>
      <div className="signIn-form-input-send-icon">
        <input type="submit" value="Se connecter" className="signIn-form-input-send" />
        <span className="signIn-form-input-send-arrow"><FaArrowRight /></span>
      </div>
    </form>
    <p className="signIn-text">Tu n'as pas encore de compte ? <NavLink to="/create" className="signIn-text-link">Crée le</NavLink></p>
  </div>
);

// == Export
export default SignIn;
