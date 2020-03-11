/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

// == Import Local
import './signIn.scss';

const SignIn = ({
  email, password, changeValue, connectUser,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    connectUser();
  };

  return (
    <div className="signIn-container">
      <div className="signIn">
        <h1 className="signIn-title">Salut !</h1>
        <p className="signIn-subtitle">Connecte toi pour chercher de nouveaux amis sur <strong className="BeComePote">BeComePote</strong>&nbsp;!</p>
        <form className="signIn-form" onSubmit={handleSubmit}>
          <div className="signIn-form-container">
            <input
              type="email"
              title="Veuillez renseigner votre email pour la connection"
              onChange={handleChange}
              id="email"
              name="email"
              value={email}
              className="signIn-form-input"
              minLength="3"
              required
              placeholder=" "
            />
            <label htmlFor="email" className="signIn-form-label"><FiMail className="signIn-form-label-icon" /> E-mail</label>
            <div className="requirements">Veuillez insérer une adresse mail valide :<br /><span className="requirements-span">exemple@exemple.com</span></div>
          </div>
          <div className="signIn-form-container">
            <input
              type="password"
              title="Veuillez renseigner votre mot de passe pour la connection"
              id="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              onChange={handleChange}
              name="password"
              value={password}
              className="signIn-form-input"
              required
              placeholder=" "
            />
            <label htmlFor="password" className="signIn-form-label"><span className="signIn-form-label-icon"><FiLock className="signIn-form-label-icon" /></span> Mot de passe</label>
            <div className="requirements">Votre mot de passe doit contenir au moins 6 caractères: au moins un en majuscule, un en minuscule et un chiffre.</div>
          </div>
          <NavLink to="/forgottenPassword" className="signIn-form-forgottenPassword">Mot de passe oublié</NavLink>
          <div className="signIn-form-input-send-icon">
            <button type="submit" className="signIn-form-input-send">
              Se connecter
              <span className="signIn-form-input-send-arrow"><FaArrowRight /></span>
            </button>
          </div>
        </form>
        <p className="signIn-text">Tu n'as pas encore de compte ? <NavLink to="/create" className="signIn-text-link">Crée le</NavLink></p>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  changeValue: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  connectUser: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
