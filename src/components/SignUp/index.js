/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock, FiMail } from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import Local
import './signup.scss';

const SignUp = ({
  email, password, pseudo, confirmPassword, changeValue, createUser,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  const handleChangePassword = (event) => {
    const { value } = event.target;
    if (!RegExp.escape) {
      RegExp.escape = (s) => String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    const t = document.getElementById('confirmPassword');
    t.pattern = RegExp.escape(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser();
  };

  return (
    <div className="signUp-container">
      <div className="signUp">
        <p className="signUp-subtitle">Créer un compte</p>
        <form action="#0" className="signUp-form" onSubmit={handleSubmit}>
          <div className="signUp-form-container">
            <input
              type="text"
              onChange={handleChange}
              id="pseudo"
              name="pseudo"
              value={pseudo}
              className="signUp-form-input"
              minLength="3"
              maxLength="15"
              required
              placeholder=" "
            />
            <label htmlFor="pseudo" className="signUp-form-label"><AiOutlineUser /> Pseudo</label>
            <div className="requirements">Votre pseudo doit contenir au moins 3 caractères.</div>
          </div>
          <div className="signUp-form-container">
            <input
              type="email"
              onChange={handleChange}
              id="email"
              name="email"
              value={email}
              className="signUp-form-input"
              minLength="3"
              required
              placeholder=" "
            />
            <label htmlFor="email" className="signUp-form-label"><FiMail className="signUp-form-label-icon" /> E-mail</label>
            <div className="requirements">Veuillez insérer une adresse mail valide :<br /><span className="requirements-span">exemple@exemple.com</span></div>
          </div>
          <div className="signUp-form-container">
            <input
              type="password"
              id="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              onChange={handleChange}
              onInput={handleChangePassword}
              name="password"
              value={password}
              className="signUp-form-input"
              required
              placeholder=" "
            />
            <label htmlFor="password" className="signUp-form-label"><span className="signUp-form-label-icon"><FiLock className="signUp-form-label-icon" /></span> Mot de passe</label>
            <div className="requirements">Votre mot de passe doit contenir au moins 6 caractères: au moins un en majuscule, un en minuscule et un chiffre.</div>
          </div>
          <div className="signUp-form-container">
            <input
              type="password"
              onChange={handleChange}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              className="signUp-form-input"
              required
              placeholder=" "
            />
            <label htmlFor="confirmPassword" className="signUp-form-label"><span className="signUp-form-label-icon"><FiLock className="signUp-form-label-icon" /></span> Confirme ton mot de passe</label>
            <div className="requirements">Vos mots de passe ne correspondent pas.</div>
          </div>
          <div className="signUp-box">
            <input
              type="checkbox"
              name="condition"
              id="condition"
              required
            />
            <a className="signUp-box-text" href="/terms">Accepter les conditions d'utilisation</a>
          </div>
          <div className="signUp-form-input-send-icon">
            <button type="submit" className="signUp-form-input-send">
              Créer un compte
              <span className="signUp-form-input-send-arrow"><FaArrowRight /></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


SignUp.propTypes = {
  changeValue: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
};

// == Export
export default SignUp;
