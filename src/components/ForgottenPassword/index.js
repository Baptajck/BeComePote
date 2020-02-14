/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { IoMdMail } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';

// == Import Local
import './forgottenPassword.scss';
import logo from './Logo_BeComePote_v4.png';

const ForgottenPassword = () => (
  <div className="forgotten">
    <img src={logo} alt="Logo" className="forgotten-logo" />
    <h1 className="forgotten-subtitle">Mot de passe oublié</h1>
    <p className="forgotten-description">Vous ne vous rappelez plus de votre mot de passe!&nbsp;? Indiquez-nous votre email (qui correspond à votre nom d'utilisateur) pour générer un nouveau mot de passe.</p>
    <form className="forgotten-form">
      <div className="forgotten-form-container">
        <label className="forgotten-form-label">
          <IoMdMail /> Email
          <input type="text" name="email" placeholder="Email" className="forgotten-form-input" />
        </label>
      </div>
      <div className="forgotten-form-input-send-icon">
        <input type="submit" value="Envoyer" className="forgotten-form-input-send" />
        <span className="forgotten-form-input-send-arrow"><FaArrowRight /></span>
      </div>
    </form>
  </div>
);

// == Export
export default ForgottenPassword;
