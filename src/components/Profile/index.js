/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import : npm
import React from 'react';

// == Import : local
import './profile.scss';

// == Composant
const Profile = () => (
  <div className="profile-layout">
    <div className="profile-container">
      <div className="profile-container-image">
        <img src="https://i.imgur.com/6SfG874.png" title="profile header" alt="header" className="profile-header" />
      </div>
      <h1 className="profile-title">Modifier son profil</h1>
      <form action="#0" className="profile-form">
        <div className="profile-form-container">
          <input
            type="text"
            title="Veuillez renseigner votre prénom"
            id="prénom"
            name="prénom"
            className="profile-form-input"
            minLength="3"
            maxLength="24"
            required
            placeholder=" "
          />
          <label htmlFor="prénom" className="profile-form-label">Prénom</label>
        </div>
        <div className="profile-form-container">
          <input
            type="text"
            title="Veuillez renseigner votre nom"
            id="nom"
            name="nom"
            className="profile-form-input"
            minLength="3"
            maxLength="24"
            required
            placeholder=" "
          />
          <label htmlFor="nom" className="profile-form-label">Nom</label>
        </div>
        <div className="profile-form-container">
          <input
            type="text"
            title="Veuillez renseigner votre pseudo"
            id="pseudo"
            name="pseudo"
            className="profile-form-input"
            minLength="3"
            maxLength="15"
            required
            placeholder=" "
          />
          <label htmlFor="pseudo" className="profile-form-label">Changer son pseudo</label>
          <div className="requirements">Votre pseudo doit contenir au moins 3 caractères.</div>
        </div>
      </form>
    </div>
  </div>
);


// == Export
export default Profile;
