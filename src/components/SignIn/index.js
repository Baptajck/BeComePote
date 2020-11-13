/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiLock, FiMail } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import PropTypes from 'prop-types';
import errorLink from 'src/utils/Errors';
// == Import Local
import './signIn.scss';

/**
 * @param  {String} email - Email du user
 * @param  {String} password - mot de passe du user
 * @param  {Func} changeValue - Champ(s) contrôlé(s)
 * @param  {Func} connectUser - Permettant la connection du user
 * @param  {String} error - Voir les erreurs
 * @param  {Bool} isPasswordShown - Pouvoir voir le mot de passe en clair
 * @param  {Func} passwordVisibility - Permet le changement du Booléan { isPasswordShown }
 */
const SignIn = ({
  email, password, changeValue, connectUser, error, isPasswordShown, passwordVisibility,
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
    event.preventDefault();
    connectUser();
  };

  return (
    <div className="signIn-container">
      <div className="signIn">
        <h1 className="signIn-title">Salut !</h1>
        <p className="signIn-subtitle">Connecte toi pour chercher de nouveaux amis sur <strong className="BeComePote">BeComePote</strong>&nbsp;!</p>
        {errorLink({
          param1: error,
          param2: 'Email is wrong',
          errorItem: 'error',
          link: {
            route: '/create',
            text: ' obtiens-en un nouveau',
          },
          textBefore: 'Ce compte BeComePote n\'existe pas, entre un autre compte ou ',
        })}
        {errorLink({
          param1: error,
          param2: 'Password is wrong',
          errorItem: 'error',
          link: {
            route: '/forgottenPassword',
            text: '  redéfinit-le ici',
          },
          textBefore: 'Ton mot de passe est incorrect. Si tu as oublié ton mot de passe,',
        })}
        <form className="signIn-form" onSubmit={handleSubmit}>
          <div className="signIn-form-container">
            <input
              type="email"
              title="Veuillez renseigner votre email pour la connection"
              onChange={handleChange}
              id="email"
              name="email"
              value={email.trim()}
              className="_form-input"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              minLength="3"
              required
              placeholder=" "
            />
            <label htmlFor="email" className="_form-label"><FiMail className="_form-label-icon" /> E-mail</label>
            <div className="requirements">Veuillez insérer une adresse mail valide :<br /><span className="requirements-span">exemple@exemple.com</span></div>
          </div>
          <div className="signIn-form-container">
            <input
              type={isPasswordShown ? 'text' : 'password'}
              title="Veuillez renseigner votre mot de passe pour la connection"
              id="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              onChange={handleChange}
              name="password"
              value={password.trim()}
              className="_form-input"
              required
              placeholder=" "
            />
            <label htmlFor="password" className="_form-label"><span className="_form-label-icon"><FiLock className="_form-label-icon" /></span> Mot de passe</label>
            <div className="requirements">Votre mot de passe doit contenir au moins 6 caractères: au moins un en majuscule, un en minuscule et un chiffre.</div>
            <div className="signIn-password-icon" onClick={passwordVisibility}>{isPasswordShown ? <IoMdEyeOff /> : <IoIosEye />}</div>
          </div>
          <NavLink to="/forgottenPassword" className="signIn-form-forgottenPassword">Mot de passe oublié</NavLink>
          <div className="_btn-form-input-send-icon">
            <button type="submit" className="_btn-form-input-send">
              Se connecter
              <span className="_btn-form-input-send-arrow"><FaArrowRight /></span>
            </button>
          </div>
        </form>
        <p className="signIn-text">Tu n'as pas encore de compte ? <NavLink to="/create" className="signIn-text-link">Crée le</NavLink></p>
      </div>
    </div>
  );
};

SignIn.defaultProps = {
  error: '',
};

SignIn.propTypes = {
  changeValue: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isPasswordShown: PropTypes.bool.isRequired,
  connectUser: PropTypes.func.isRequired,
  error: PropTypes.string,
  passwordVisibility: PropTypes.func.isRequired,
};
// == Export
export default SignIn;
