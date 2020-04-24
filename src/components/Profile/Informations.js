/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import { FaRegCheckCircle, FaRegEdit, FaRegTimesCircle } from 'react-icons/fa';

const Informations = ({
  firstname,
  lastname,
  pseudo,
  age,
  presentation,
  updated_at,
  created_at,
  isInEditModeFirstname,
  isInEditModeLastname,
  isInEditModePseudo,
  isInEditModeAge,
  isInEditModePresentation,
  changeEditModeFirstname,
  changeEditModeLastname,
  changeEditModePseudo,
  changeEditModeAge,
  changeEditModePresentation,
  changeInputProfile,
  updateInputValueFirstname,
  updateInputValueLastname,
  updateInputValuePseudo,
  updateInputValueAge,
  updateInputValuePresentation,
  oldValueFirstname,
  oldValueLastname,
  oldValuePseudo,
  oldValueAge,
  oldValuePresentation,
  closeFirstname,
  closeLastname,
  closePseudo,
  closeAge,
  closePresentation,
  isFailEdit,
  editProfile,
}) => {
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

  const closeActionAge = () => {
    closeAge();
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
  const handleUpdateInputValueAge = () => {
    updateInputValueAge();
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
  const handleChangeEditModeAge = () => {
    changeEditModeAge();
  };
  const handleChangeEditModePresentation = () => {
    changeEditModePresentation();
  };

  // == Age
  const submitBday = (event) => {
    const { name, value } = event.target;
    const Bdate = value;
    const Bday = new Date(Bdate);
    const ageNow = Math.trunc(((Date.now() - Bday) / (31557600000)));
    changeInputProfile(name, String(ageNow));
  };

  const formatDate = (reviewDate) => {
    const options = {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    };
    const timestamp = Date.parse(reviewDate);
    const timestampToDate = new Date(timestamp);
    const reviewDateFormated = timestampToDate.toLocaleDateString('fr-FR', options);
    return reviewDateFormated;
  };

  return (
    <>
      <form action="#0" className="profile-form">
        {!isInEditModeFirstname && (
          <div className="profile-form-container">
            <label htmlFor="prénom" className="profile-form-label">Prénom</label>
            <div className="edition-mode">
              {isFailEdit ? oldValueFirstname : firstname}
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
        {/* AGE */}
        {!isInEditModeAge && (
          <div className="profile-form-container">
            <label htmlFor="age" className="profile-form-label">Age</label>
            <div className="edition-mode">
              {isFailEdit ? oldValueAge : age}
              <button type="button" className="edition-mode-button" title="Editer" onClick={handleChangeEditModeAge}>
                <span className="edition-mode-icon"><FaRegEdit /></span>
              </button>
            </div>
          </div>
        )}
        {isInEditModeAge && (
          <div className="profile-form-container">
            <label htmlFor="age" className="profile-form-label">Change son âge</label>
            <div className="edition-mode open">
              <input
                type="date"
                className="edition-mode-text"
                name="age"
                onChange={submitBday}
              />
              <button type="button" className="edition-mode-button" title="Valider" onClick={handleUpdateInputValueAge}>
                <span className="edition-mode-icon"><FaRegCheckCircle /></span>
              </button>
              <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={closeActionAge}>
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
        <p className="profile-modification">Création du compte : <span className="profile-modification-span">{formatDate(created_at)}</span></p>
        {updated_at === null ? '' : <p className="profile-modification">Dernière modification : <span className="profile-modification-span">{formatDate(updated_at)}</span></p>}
      </form>
    </>
  );
};

Informations.defaultProps = {
  firstname: '',
  lastname: '',
  pseudo: '',
  presentation: '',
  age: '',
  updated_at: '',
  created_at: '',
};

Informations.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  pseudo: PropTypes.string,
  presentation: PropTypes.string,
  age: PropTypes.string,
  updated_at: PropTypes.string,
  created_at: PropTypes.string,
  isInEditModeAge: PropTypes.bool.isRequired,
  isInEditModeFirstname: PropTypes.bool.isRequired,
  isInEditModeLastname: PropTypes.bool.isRequired,
  isInEditModePseudo: PropTypes.bool.isRequired,
  isInEditModePresentation: PropTypes.bool.isRequired,
  changeEditModeFirstname: PropTypes.func.isRequired,
  changeEditModeLastname: PropTypes.func.isRequired,
  changeEditModePseudo: PropTypes.func.isRequired,
  changeEditModePresentation: PropTypes.func.isRequired,
  changeEditModeAge: PropTypes.func.isRequired,
  changeInputProfile: PropTypes.func.isRequired,
  updateInputValueFirstname: PropTypes.func.isRequired,
  updateInputValueLastname: PropTypes.func.isRequired,
  updateInputValuePseudo: PropTypes.func.isRequired,
  updateInputValueAge: PropTypes.func.isRequired,
  updateInputValuePresentation: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired,
  oldValueFirstname: PropTypes.string.isRequired,
  oldValueLastname: PropTypes.string.isRequired,
  oldValuePseudo: PropTypes.string.isRequired,
  oldValueAge: PropTypes.string.isRequired,
  oldValuePresentation: PropTypes.string.isRequired,
  closeFirstname: PropTypes.func.isRequired,
  closeLastname: PropTypes.func.isRequired,
  closePseudo: PropTypes.func.isRequired,
  closeAge: PropTypes.func.isRequired,
  closePresentation: PropTypes.func.isRequired,
  isFailEdit: PropTypes.bool.isRequired,
};

export default Informations;
