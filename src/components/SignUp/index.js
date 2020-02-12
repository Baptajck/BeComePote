/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { IoMdMail, IoIosLock } from 'react-icons/io';
import { FaArrowRight } from 'react-icons/fa';

// == Import Local
import './signup.scss';

const SignUp = () => (
  <div className="signUp">
    <p className="signUp-subtitle">Créer un compte</p>
    <form className="signUp-form">
      <div className="signUp-form-container">
        <label className="signUp-form-label">
          <IoMdMail /> Email
          <input type="text" name="email" placeholder="Email" className="signUp-form-input" />
        </label>
      </div>
      <div className="signUp-form-container">
        <label className="signUp-form-label">
          <IoIosLock /> Mot de passe
          <input type="password" name="password" placeholder="Mot de passe" className="signUp-form-input" />
        </label>
      </div>
      <div className="signUp-form-container">
        <label className="signUp-form-label">
          <IoIosLock /> Confirme ton mot de passe
          <input type="password" name="password" placeholder="Mot de passe" className="signUp-form-input" />
        </label>
      </div>
      <div className="signUp-form-input-send-icon">
        <input type="submit" value="Créer un compte" className="signUp-form-input-send" />
        <span className="signUp-form-input-send-arrow"><FaArrowRight /></span>
      </div>
    </form>
  </div>
);

// == Export
export default SignUp;
