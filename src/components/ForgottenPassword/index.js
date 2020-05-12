/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import { errorOrNot } from 'src/utils/Errors';
import PropTypes from 'prop-types';


// == Import Local
import './forgottenPassword.scss';
import logo from './Logo_BeComePote_v4.png';

/**
 * @param  {String} email - Email de l'utilisateur
 * @param  {func} changeValue - Function qui permet un champ(s) contrôlé(s)
 * @param  {func} changePassword - Function qui permet d'envoyer un mail au user pour changer son mot de passe
 * @param  {String} messageSend - Permet de mettre l'erreur au front
 */
const ForgottenPassword = ({
  email, changeValue, changePassword, messageSend,
}) => {
  /**
   * @param  {Object} event
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  /**
   * @param  {Object} event
   */
  const handleSubmit = (event) => {
    const { value } = event.target;
    event.preventDefault();
    changePassword(value);
  };

  return (
    <div className="forgotten-container">
      <div className="forgotten">
        <img src={logo} alt="Logo" className="forgotten-logo" />
        <h1 className="forgotten-subtitle">Mot de passe oublié</h1>
        <p className="forgotten-description">Vous ne vous rappelez plus de votre mot de passe!&nbsp;? Indiquez-nous votre email (qui correspond à votre nom d'utilisateur) pour générer un nouveau mot de passe.</p>
        {errorOrNot({
          param1: messageSend,
          param2: 'No user with that email',
          errorItem: 'error',
          text: 'Désolé nous ne connaissons pas cet email',
        })}
        {errorOrNot({
          param1: messageSend,
          param2: 'Email to reset password has been sent to user.',
          errorItem: 'good',
          text: 'Ton email a bien été envoyé, cela peut prendre quelques minutes',
        })}
        <form className="forgotten-form" onSubmit={handleSubmit}>
          <div className="forgotten-form-container">
            <input
              type="email"
              title="Veuillez renseigner votre email pour recevoir un mail et pouvoir changer votre mot de passe"
              onChange={handleChange}
              id="email"
              name="email"
              value={email.trim()}
              className="_form-input"
              minLength="3"
              required
              placeholder=" "
            />
            <label htmlFor="email" className="_form-label"><FiMail className="_form-label-icon" /> E-mail</label>
            <div className="requirements">Veuillez insérer une adresse mail valide :<br /><span className="requirements-span">exemple@exemple.com</span></div>
          </div>
          <div className="_btn-form-input-send-icon">
            <button type="submit" className="_btn-form-input-send">
              Envoyer
              <span className="_btn-form-input-send-arrow"><FaArrowRight /></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ForgottenPassword.propTypes = {
  changeValue: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  messageSend: PropTypes.string.isRequired,
};

// == Export
export default ForgottenPassword;
