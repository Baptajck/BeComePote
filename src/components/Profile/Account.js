/* eslint-disable react/jsx-fragments */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import CustomPrompt from './CustomPrompt/index';
/**
 * @param  {Func} getLogout - Permet la déconnexion du user
 * @param  {Func} deleteProfile - Fait apparaître la prompt pour supprimer son compte
 * @param  {Bool} show - Booléan pour l'apparaition de la prompt
 * @param  {Func} showPrompt - Voir la prompt
 * @param  {Bool} showPromptCancel - Ne plus voir la prompt
 */
const Account = ({
  getLogout, deleteProfile, show, showPrompt, showPromptCancel,
}) => {
  const handlePrompt = (event) => {
    event.preventDefault();
    showPrompt();
  };
  // Logout
  const handleLogout = () => {
    localStorage.removeItem('User_Session');
    setTimeout(() => {
      getLogout();
    }, 500);
  };
  return (
    <Fragment>
      <div className="profile-form-button">
        <div className="profile-form-button-container">
          <p className="profile-form-button-title">Tu veux te déconnecter ?</p>
          <button type="button" onClick={handleLogout} className={`profile-form-button-button ${show ? 'profile-disabled' : ''}`} disabled={show}>Déconnexion <FiLogOut /></button>
        </div>
        <hr className="profile-hr" />
        <div className="profile-danger-zone">
          <h2 className="profile-danger-zone-title">
            Danger zone
          </h2>
        </div>
        <div className="profile-form-button-container">
          <p className="profile-form-button-title">Tu veux supprimer ton compte ?</p>
          <CustomPrompt
            show={show}
            message="Es-tu sur de vouloir supprimer ton compte ?"
            cancel={showPromptCancel}
            deleteProfile={deleteProfile}
          />
          <button
            type="button"
            className={`profile-form-button-button ${show ? 'profile-disabled' : ''}`}
            onClick={handlePrompt}
          >
            Supprimer son compte <MdDeleteForever />
          </button>
        </div>
      </div>
    </Fragment>
  );
};


Account.propTypes = {
  show: PropTypes.bool.isRequired,
  getLogout: PropTypes.func.isRequired,
  showPrompt: PropTypes.func.isRequired,
  showPromptCancel: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
};

export default Account;
