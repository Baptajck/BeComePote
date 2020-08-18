/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import NPM
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosEye, IoMdEyeOff } from 'react-icons/io';
import { FiLock } from 'react-icons/fi';
import PropTypes from 'prop-types';
import errorLink from 'src/utils/Errors';

// == Import Local
import './newPassword.scss';
import logo from './Logo_BeComePote_v4.png';

/**
 * @param  {String} password - Le mot de passe du user
 * @param  {String} confirmPassword - La confirmation du mot de passe
 * @param  {Func} changeValue - Champ(s) contrôlé(s)
 * @param  {Func} resetPassword - Changer son mot de passe
 * @param  {String} messageSend - Reçois la réussite ou l'erreur
 * @param  {Func} newPasswordVisibility - Change isNewPasswordShown en true ou false
 * @param  {Func} newConfirmPasswordVisibility - Change isNewConfirmPasswordShown en true ou false
 * @param  {Bool} isNewPasswordShown - Permet de cacher le mot de passe
 * @param  {Bool} isNewConfirmPasswordShown - Permet de cacher le champ confirme mot de passe
 */
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
  const handleChangePassword = (event) => {
    const { value } = event.target;
    if (!RegExp.escape) {
      RegExp.escape = (s) => String(s).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    const t = document.getElementById('confirmPassword');
    t.pattern = RegExp.escape(value);
  };

  /**
   * @param  {Object} event
   */
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
        {errorLink({
          param1: messageSend,
          param2: 'New password is accepted',
          errorItem: 'good',
          link: {
            route: '/connect',
            text: ' se connecter',
          },
          textBefore: 'Ton mot de passe a bien été changé, tu peux retourner sur la page ',
          textAfter: ' pour continuer ton aventure',
        })}
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
              className="_form-input"
              required
              placeholder=" "
            />
            <label htmlFor="password" className="_form-label"><span className="_form-label-icon"><FiLock className="_form-label-icon" /></span> Mot de passe</label>
            <div className="newPassword-password-icon" onClick={newPasswordVisibility}>{isNewPasswordShown ? <IoMdEyeOff /> : <IoIosEye />}</div>
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
              className="_form-input"
              required
              placeholder=" "
            />
            <label htmlFor="confirmPassword" className="_form-label"><span className="_form-label-icon"><FiLock className="_form-label-icon" /></span> Confirme ton mot de passe</label>
            <div className="newPassword-password-icon" onClick={newConfirmPasswordVisibility}>{isNewConfirmPasswordShown ? <IoMdEyeOff /> : <IoIosEye />}</div>
            <div className="requirements">Vos mots de passe ne correspondent pas.</div>
          </div>
          <div className="_btn-form-input-send-icon">
            <button type="submit" className="_btn-form-input-send">
              Confirmer
              <span className="_btn-form-input-send-arrow"><FaArrowRight /></span>
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
  newPasswordVisibility: PropTypes.func.isRequired,
  newConfirmPasswordVisibility: PropTypes.func.isRequired,
  isNewPasswordShown: PropTypes.bool.isRequired,
  isNewConfirmPasswordShown: PropTypes.bool.isRequired,
};

// == Export
export default NewPassword;
