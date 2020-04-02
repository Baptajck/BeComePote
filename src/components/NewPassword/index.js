/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi';
import PropTypes from 'prop-types';

// == Import Local
import './newPassword.scss';
import logo from './Logo_BeComePote_v4.png';

const NewPassword = ({
  password, confirmPassword, changeValue, resetPassword,
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
        <p className="newPassword-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat officiis nostrum consequatur iure, a eos aliquid alias voluptas adipisci. Itaque, molestiae? Esse omnis rerum nobis in temporibus tempora deserunt fuga.</p>
        <form action="#0" className="newPassword-form" onSubmit={handleSubmit}>
          <div className="newPassword-form-container">
            <input
              type="password"
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
            <div className="requirements">Votre mot de passe doit contenir au moins 6 caractères: au moins un en majuscule, un en minuscule et un chiffre.</div>
          </div>
          <div className="newPassword-form-container">
            <input
              type="password"
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
  confirmPassword: PropTypes.string.isRequired,
};

// == Export
export default NewPassword;
