/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import PropTypes from 'prop-types';


// == Import Local
import './forgottenPassword.scss';
import logo from './Logo_BeComePote_v4.png';

const ForgottenPassword = ({
  email, changeValue,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="forgotten-container">
      <div className="forgotten">
        <img src={logo} alt="Logo" className="forgotten-logo" />
        <h1 className="forgotten-subtitle">Mot de passe oublié</h1>
        <p className="forgotten-description">Vous ne vous rappelez plus de votre mot de passe!&nbsp;? Indiquez-nous votre email (qui correspond à votre nom d'utilisateur) pour générer un nouveau mot de passe.</p>
        <form className="forgotten-form" onSubmit={handleSubmit}>
          <div className="forgotten-form-container">
            <input
              type="email"
              title="Veuillez renseigner votre email pour recevoir un mail et pouvoir changer votre mot de passe"
              onChange={handleChange}
              id="email"
              name="email"
              value={email}
              className="forgotten-form-input"
              minLength="3"
              required
              placeholder=" "
            />
            <label htmlFor="email" className="forgotten-form-label"><FiMail className="forgotten-form-label-icon" /> E-mail</label>
            <div className="requirements">Veuillez insérer une adresse mail valide :<br /><span className="requirements-span">exemple@exemple.com</span></div>
          </div>
          <div className="forgotten-form-input-send-icon">
            <button type="submit" className="forgotten-form-input-send">
              Envoyer
              <span className="forgotten-form-input-send-arrow"><FaArrowRight /></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ForgottenPassword.propTypes = {
  changeValue: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

// == Export
export default ForgottenPassword;
