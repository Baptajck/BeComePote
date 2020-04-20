/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import { FiLock } from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import Local
import './newPassword.scss';
import logo from './Logo_BeComePote_v4.png';

const NewPassword = ({
  password,
  confirmPassword,
  changeValue,
  resetPassword,
  messageSend,
  newPasswordVisibility,
  newConfirmPasswordVisibility,
  isNewPasswordShown,
  isNewConfirmPasswordShown,
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

  const toggleNewPasswordVisiblity = () => {
    newPasswordVisibility();
  };

  const toggleNewConfirmPasswordVisiblity = () => {
    newConfirmPasswordVisibility();
  };

  const handleSubmit = (event) => {
    const userId = () => {
      const url = document.location.pathname;
      const a = url.split('/');
      const n = Number(a[2]);
      return n;
    };
    const token = () => {
      const url = document.location.pathname;
      const a = url.split('/');
      const n = a[3];
      return n;
    };
    event.preventDefault();
    resetPassword(userId(), token());
  };


  return (
    <div className="newPassword-container">
      <div className="newPassword">
        <img src={logo} alt="Logo" className="newPassword-logo" />
        <h1 className="newPassword-subtitle">Changer son mot de passe</h1>
        <p className="newPassword-description">Veuillez rentrer un nouveau mot de passe et de le confirmer dans les champs ci-dessous</p>
        {messageSend === 'New password is accepted' ? <p className="newPassword-description-message">Ton mot de passe a bien été changé, tu peux retourner sur la page <NavLink to="/connect" className="newPassword-description-message-link">se connecter</NavLink> pour continuer ton aventure</p> : ''}
        <form action="#0" className="newPassword-form" onSubmit={handleSubmit}>
          <div className="newPassword-form-container">
            <input
              type={isNewPasswordShown ? 'text' : 'password'}
              title="Veuillez insérer votre nouveau mot de passe"
              id="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              onChange={handleChange}
              onInput={handleChangePassword}
              name="password"
              value={password.trim()}
              className="newPassword-form-input"
              required
              placeholder=" "
            />
            <label htmlFor="password" className="newPassword-form-label"><span className="newPassword-form-label-icon"><FiLock className="newPassword-form-label-icon" /></span> Mot de passe</label>
            <div className="newPassword-password-icon" onClick={toggleNewPasswordVisiblity}>{isNewPasswordShown ? <IoMdEyeOff /> : <IoIosEye />}</div>
          </div>
          <div className="newPassword-form-container">
            <input
              type={isNewConfirmPasswordShown ? 'text' : 'password'}
              title="Veuillez insérer le nouveau mot de passe pour une confirmation"
              onChange={handleChange}
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword.trim()}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
              className="newPassword-form-input"
              required
              placeholder=" "
            />
            <label htmlFor="confirmPassword" className="newPassword-form-label"><span className="newPassword-form-label-icon"><FiLock className="newPassword-form-label-icon" /></span> Confirme ton mot de passe</label>
            <div className="newPassword-password-icon" onClick={toggleNewConfirmPasswordVisiblity}>{isNewConfirmPasswordShown ? <IoMdEyeOff /> : <IoIosEye />}</div>
            <div className="requirements">Vos mots de passe ne correspondent pas.</div>
          </div>
          <div className="newPassword-form-input-send-icon">
            <button type="submit" className="newPassword-form-input-send">
              Confirmer
              <span className="newPassword-form-input-send-arrow"><FaArrowRight /></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


NewPassword.propTypes = {
  changeValue: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  messageSend: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
};

// == Export
export default NewPassword;
