/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import : npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaRegCheckCircle, FaRegEdit, FaRegTimesCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

// == Import : local
import './profile.scss';
import questions from 'src/data/questions';
import Tabs from 'src/utils/Tabs/Tabs';

// == Component
const Profile = ({
  firstname,
  lastname,
  pseudo,
  presentation,
  isInEditModeFirstname,
  isInEditModeLastname,
  isInEditModePseudo,
  isInEditModePresentation,
  changeEditModeFirstname,
  changeEditModeLastname,
  changeEditModePseudo,
  changeEditModePresentation,
  changeInputProfile,
  updateInputValueFirstname,
  updateInputValueLastname,
  updateInputValuePseudo,
  updateInputValuePresentation,
  getLogout,
  oldValueFirstname,
  oldValueLastname,
  oldValuePseudo,
  oldValuePresentation,
  closeFirstname,
  closeLastname,
  closePseudo,
  closePresentation,
  isFailEdit,
  getProfile,
  editProfile,
  deleteProfile,
}) => {
  useEffect(() => {
    getProfile();
  }, []);


  // Logout
  const handleLogout = () => {
    getLogout();
  };
  // closed button
  const closeActionFirstname = () => {
    closeFirstname();
  };

  const closeActionLastname = () => {
    closeLastname();
  };

  const closeActionPseudo = () => {
    closePseudo();
  };

  const closeActionPresentation = () => {
    closePresentation();
  };

  // saved button
  const handleUpdateInputValueFirstname = () => {
    updateInputValueFirstname();
    editProfile();
  };
  const handleUpdateInputValueLastname = () => {
    updateInputValueLastname();
    editProfile();
  };
  const handleUpdateInputValuePseudo = () => {
    updateInputValuePseudo();
    editProfile();
  };
  const handleUpdateInputValuePresentation = () => {
    updateInputValuePresentation();
    editProfile();
  };

  // Champs contrôlés
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeInputProfile(name, value);
  };

  // Passer de input à non input
  const handleChangeEditModeFirstname = () => {
    changeEditModeFirstname();
  };
  const handleChangeEditModeLastname = () => {
    changeEditModeLastname();
  };
  const handleChangeEditModePseudo = () => {
    changeEditModePseudo();
  };
  const handleChangeEditModePresentation = () => {
    changeEditModePresentation();
  };

  // Supprimer le profil
  const handleDeleteProfile = () => {
    deleteProfile();
    // getLogout();
  };

  return (
    <div className="profile-layout">
      <div className="profile-container">
        <div className="profile-container-image">
          <img src="https://i.imgur.com/HgoCwpu.png" title="profile header" alt="header" className="profile-header" />
        </div>
        <div className="profile-wrapper">
          <h1 className="profile-title">Mon profil</h1>
          <Tabs>
          <div label="Informations">
            <div className="profile-form-info">
            <form action="#0" className="profile-form">
                {/* PRENOM */}
                {!isInEditModeFirstname && (
                  <div className="profile-form-container">
                    <label htmlFor="prénom" className="profile-form-label">Prénom</label>
                    <div className="edition-mode">
                      {isFailEdit ? oldValueFirstname : firstname} {/* firstname */}
                      <button type="button" className="edition-mode-button" title="Editer" onClick={handleChangeEditModeFirstname}>
                        <span className="edition-mode-icon"><FaRegEdit /></span>
                      </button>
                    </div>
                  </div>
                )}
                {isInEditModeFirstname && (
                  <div className="profile-form-container">
                    <label htmlFor="prénom" className="profile-form-label">Prénom</label>
                    <div className="edition-mode open">
                      <input
                        type="text"
                        className="edition-mode-text"
                        name="firstname"
                        value={isFailEdit ? oldValueFirstname : firstname}
                        onChange={handleChange}
                        minLength="3"
                        maxLength="20"
                      />
                      <button type="button" className="edition-mode-button" title="Valider" name="firstname" onClick={handleUpdateInputValueFirstname}>
                        <span className="edition-mode-icon"><FaRegCheckCircle /></span>
                      </button>
                      <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={closeActionFirstname}>
                        <span className="edition-mode-icon"><FaRegTimesCircle /></span>
                      </button>
                    </div>
                  </div>
                )}
                {/* NOM */}
                {!isInEditModeLastname && (
                  <div className="profile-form-container">
                    <label htmlFor="nom" className="profile-form-label">Nom</label>
                    <div className="edition-mode">
                      {isFailEdit ? oldValueLastname : lastname} {/* lastname */}
                      <button type="button" className="edition-mode-button" title="Editer" onClick={handleChangeEditModeLastname}>
                        <span className="edition-mode-icon"><FaRegEdit /></span>
                      </button>
                    </div>
                  </div>
                )}
                {isInEditModeLastname && (
                  <div className="profile-form-container">
                    <label htmlFor="nom" className="profile-form-label">Nom</label>
                    <div className="edition-mode open">
                      <input
                        type="text"
                        className="edition-mode-text"
                        name="lastname"
                        value={isFailEdit ? oldValueLastname : lastname}
                        onChange={handleChange}
                        minLength="3"
                        maxLength="20"
                      />
                      <button type="button" className="edition-mode-button" title="Valider" onClick={handleUpdateInputValueLastname}>
                        <span className="edition-mode-icon"><FaRegCheckCircle /></span>
                      </button>
                      <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={closeActionLastname}>
                        <span className="edition-mode-icon"><FaRegTimesCircle /></span>
                      </button>
                    </div>
                  </div>
                )}
                {/* CHANGER SON PSEUDO */}
                {!isInEditModePseudo && (
                  <div className="profile-form-container">
                    <label htmlFor="pseudo" className="profile-form-label">Pseudo</label>
                    <div className="edition-mode">
                      {isFailEdit ? oldValuePseudo : pseudo} {/* pseudo */}
                      <button type="button" className="edition-mode-button" title="Editer" onClick={handleChangeEditModePseudo}>
                        <span className="edition-mode-icon"><FaRegEdit /></span>
                      </button>
                    </div>
                    <div className="requirements">Votre pseudo doit contenir au moins 3 caractères.</div>
                  </div>
                )}
                {isInEditModePseudo && (
                  <div className="profile-form-container">
                    <label htmlFor="nom" className="profile-form-label">Changer son pseudo</label>
                    <div className="edition-mode open">
                      <input
                        type="text"
                        className="edition-mode-text"
                        name="pseudo"
                        value={isFailEdit ? oldValuePseudo : pseudo}
                        onChange={handleChange}
                        minLength="3"
                        maxLength="20"
                      />
                      <button type="button" className="edition-mode-button" title="Valider" onClick={handleUpdateInputValuePseudo}>
                        <span className="edition-mode-icon"><FaRegCheckCircle /></span>
                      </button>
                      <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={closeActionPseudo}>
                        <span className="edition-mode-icon"><FaRegTimesCircle /></span>
                      </button>
                    </div>
                  </div>
                )}
                <hr className="profile-hr" />
                {!isInEditModePresentation && (
                <div className="profile-form-container">
                  <label htmlFor="presentation" className="profile-form-label profile-label-presentation">Présentation</label>
                  <div className="edition-mode presentation">
                    {isFailEdit ? oldValuePresentation : presentation} {/* presentation */}
                  </div>
                  <button type="button" className="edition-mode-button" title="Editer" onClick={handleChangeEditModePresentation}>
                      <span className="edition-mode-icon"><FaRegEdit /></span>
                  </button>
                </div>
                )}
                {isInEditModePresentation && (
                  <div className="profile-form-container">
                    <div className="edition-mode open">
                      <textarea
                        type="text"
                        rows="8"
                        className="edition-mode-text"
                        name="presentation"
                        value={isFailEdit ? oldValuePresentation : presentation}
                        onChange={handleChange}
                      />
                      <button type="button" className="edition-mode-button" title="Valider" onClick={handleUpdateInputValuePresentation}>
                        <span className="edition-mode-icon"><FaRegCheckCircle /></span>
                      </button>
                      <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={closeActionPresentation}>
                          <span className="edition-mode-icon"><FaRegTimesCircle /></span>
                      </button>
                    </div>
                  </div>
                )}
            </form>
            </div>
          </div>
            <div className="profile-form-subtitle" label="Questions">
            <form action="#0" className="profile-form profile-form-quizz-container">
            {/* QUESTIONS */}
            {questions.map((question) => (
              <div key={question.id} className="profile-form-quizz">
                <p className="profile-form-quizz-question">{question.question}</p>
                <div>
                  <input
                    type="radio"
                    id={question.response1}
                    name={`${question.response}${question.id}`}
                    value={question.response1}
                  />
                  <label className="profile-form-quizz-answer" htmlFor={question.response1}>{question.response1}</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id={question.response2}
                    name={`${question.response}${question.id}`}
                    value={question.response2}
                  />
                  <label className="profile-form-quizz-answer" htmlFor={question.response2}>{question.response2}</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id={question.response3}
                    name={`${question.response}${question.id}`}
                    value={question.response3}
                  />
                  <label className="profile-form-quizz-answer" htmlFor={question.response3}>{question.response3}</label>
                </div>
              </div>
            ))}
            </form>
            </div>
          </Tabs>
              <div className="logout-container">
                  <NavLink to="/connect" onClick={handleLogout} className="logout-container-text logout-container-input">Déconnexion <FiLogOut /></NavLink>
              </div>
              <div className="logout-container">
                  <NavLink to="/create" onClick={handleDeleteProfile} className="logout-container-text logout-container-input">
                    {/* <Prompt message="Voulez vous vraiment supprimer votre compte ?" /> */}
                    Supprimer son compte <MdDeleteForever />
                  </NavLink>
              </div>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Profile;

Profile.defaultProps = {
  firstname: '',
  lastname: '',
  pseudo: '',
  presentation: '',
};

Profile.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  pseudo: PropTypes.string,
  presentation: PropTypes.string,
  isInEditModeFirstname: PropTypes.bool.isRequired,
  isInEditModeLastname: PropTypes.bool.isRequired,
  isInEditModePseudo: PropTypes.bool.isRequired,
  isInEditModePresentation: PropTypes.bool.isRequired,
  changeEditModeFirstname: PropTypes.func.isRequired,
  changeEditModeLastname: PropTypes.func.isRequired,
  changeEditModePseudo: PropTypes.func.isRequired,
  changeEditModePresentation: PropTypes.func.isRequired,
  changeInputProfile: PropTypes.func.isRequired,
  updateInputValueFirstname: PropTypes.func.isRequired,
  updateInputValueLastname: PropTypes.func.isRequired,
  updateInputValuePseudo: PropTypes.func.isRequired,
  getLogout: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  oldValueFirstname: PropTypes.string.isRequired,
  oldValueLastname: PropTypes.string.isRequired,
  oldValuePseudo: PropTypes.string.isRequired,
};
