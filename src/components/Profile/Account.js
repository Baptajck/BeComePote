import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FiLogOut } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


const Account = ({
  getLogout, deleteProfile,
}) => {
  // Logout
  const handleLogout = () => {
    setTimeout(() => {
      getLogout();
    }, 500);
  };

  // Supprimer le profil
  const handleDeleteProfile = () => {
    deleteProfile();
  };
  return (
    <Fragment>
      <div className="profile-form-button">
        <div className="profile-form-button-container">
          <p className="profile-form-button-title">Tu veux te déconnecter ?</p>
          <NavLink to="/connect" onClick={handleLogout} className="profile-form-button-button">Déconnexion <FiLogOut /></NavLink>
        </div>
        <hr className="profile-hr" />
        <div className="profile-form-button-container">
          <p className="profile-form-button-title">Tu veux supprimer ton compte ?</p>
          <NavLink to="/create" onClick={handleDeleteProfile} className="profile-form-button-button">
            Supprimer son compte <MdDeleteForever />
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};


Account.propTypes = {
  getLogout: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
};

export default Account;
