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
  email, password, pseudo, confirmPassword, changeValue, createUser, user,
}) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (password !== confirmPassword) {
    //   alert('Vos mots de passe ne correspondent pas.');
    // }
    // else {
    createUser();
    console.log(user);
    // }
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
              className="signUp-form-input"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              required
              placeholder=" "
            />
            <label htmlFor="confirmPassword" className="signUp-form-label"><span className="signUp-form-label-icon"><FiLock className="signUp-form-label-icon" /></span> Confirme ton mot de passe</label>
            <div className="requirements">Votre mot de passe doit contenir au moins 6 caractères: au moins un en majuscule, un en minuscule et un chiffre.</div>
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
            <input type="submit" value="Créer un compte" className="signUp-form-input-send" />
            <span className="signUp-form-input-send-arrow"><FaArrowRight /></span>
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
  user: PropTypes.array.isRequired,
};

// == Export
export default SignUp;
