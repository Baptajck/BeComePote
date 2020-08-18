/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLock, FiMail } from 'react-icons/fi';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import PropTypes from 'prop-types';
import errorLink from 'src/utils/Errors';

// == Import Local
import './signup.scss';

/**
 * @param  {String} email - Email du user
 * @param  {String} password- Mot de passe du user
 * @param  {String} pseudo - Pseudo du user
 * @param  {String} confirmPassword - Confirmation du mot de passe
 * @param  {Func} changeValue - Champ(s) contrôlé(s)
 * @param  {Func} createUser - Création d'un user
 * @param  {Bool} isPasswordShown - Pouvoir voir le mot de passe en clair
 * @param  {Func} passwordVisibility - Permet le changement du Booléan { isPasswordShown }
 * @param  {Bool} isConfirmPasswordShown - Pouvoir voir la confirmation du mot de passe en clair
 * @param  {Func} confirmPasswordVisibility - Permet le changement du Booléan { isConfirmPasswordShown }
 * @param  {String} error - Permet de voir les erreurs
 */
const SignUp = ({
  email,
  password,
  pseudo,
  confirmPassword,
  changeValue,
  createUser,
  isPasswordShown,
  passwordVisibility,
  isConfirmPasswordShown,
  confirmPasswordVisibility,
  error,
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
        {errorLink({
          param1: error,
          param2: 'Email already exist',
          errorItem: 'error',
          textBefore: 'Cette email est déjà utilisé. Essayez en un autre ou',
          link: {
            route: '/connect',
            text: ' connectez-vous',
          },
        })}
        <form action="#0" className="signUp-form" onSubmit={handleSubmit}>
          <div className="signUp-form-container">
            <input
              type="text"
              title="Veuillez renseigner votre pseudo pour l'inscription"
              onChange={handleChange}
              id="pseudo"
              name="pseudo"
              value={pseudo.trim()}
              className="_form-input"
              minLength="3"
              maxLength="15"
              required
              placeholder=" "
            />
            <label htmlFor="pseudo" className="_form-label"><AiOutlineUser /> Pseudo</label>
            <div className="requirements">Votre pseudo doit contenir au moins 3 caractères.</div>
          </div>
          <div className="signUp-form-container">
            <input
              type="email"
              title="Veuillez renseigner votre email pour l'inscription"
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
          <div className="signUp-form-container">
            <input
              type={isPasswordShown ? 'text' : 'password'}
              title="Veuillez renseigner votre Mot de passe pour l'inscription"
              id="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              onChange={handleChange}
              onInput={handleChangePassword}
              name="password"
              value={password.trim()}
              className="_form-input"
              required
              placeholder=" "
            />
            <label htmlFor="password" className="_form-label"><span className="_form-label-icon"><FiLock className="_form-label-icon" /></span> Mot de passe</label>
            <div className="requirements">Votre mot de passe doit contenir au moins 6 caractères: au moins un en majuscule, un en minuscule et un chiffre.</div>
            <div className="signUp-password-icon" onClick={passwordVisibility}>{isPasswordShown ? <IoMdEyeOff /> : <IoIosEye />}</div>
          </div>
          <div className="signUp-form-container">
            <input
              type={isConfirmPasswordShown ? 'text' : 'password'}
              title="Veuillez renseigner votre mot de passe pour une confirmation pour l'inscription"
              onChange={handleChange}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword.trim()}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              className="_form-input"
              required
              placeholder=" "
            />
            <label htmlFor="confirmPassword" className="_form-label"><span className="_form-label-icon"><FiLock className="_form-label-icon" /></span> Confirme ton mot de passe</label>
            <div className="requirements">Vos mots de passe ne correspondent pas.</div>
            <div className="signUp-password-icon" onClick={confirmPasswordVisibility}>{isConfirmPasswordShown ? <IoMdEyeOff /> : <IoIosEye />}</div>
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
          <p className="signUp-form-important">&#42; Tous les champs sont obligatoires</p>
          <div className="_btn-form-input-send-icon">
            <button type="submit" className="_btn-form-input-send">
              Créer un compte
              <span className="_btn-form-input-send-arrow"><FaArrowRight /></span>
            </button>
          </div>
        </form>
        <p className="signUp-text">Tu as déjà un compte ? <NavLink to="/connect" className="signUp-text-link">Connecte-toi</NavLink></p>
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
  isPasswordShown: PropTypes.bool.isRequired,
  isConfirmPasswordShown: PropTypes.bool.isRequired,
  passwordVisibility: PropTypes.func.isRequired,
  confirmPasswordVisibility: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
};

// == Export
export default SignUp;
