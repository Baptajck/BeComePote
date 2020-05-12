/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FaRegCheckCircle, FaRegEdit, FaRegTimesCircle } from 'react-icons/fa';
import DropZone from './DropZone/index';

/**
 * @param  {Object} profile - Voir toutes les informations venant de la BDD pour le user
 * @param  {Bool} isInEditModeFirstname - Change le front pour Firstname
 * @param  {Bool} isInEditModeLastname - Change le front pour Lastname
 * @param  {Bool} isInEditModePseudo - Change le front pour Pseudo
 * @param  {Bool} isInEditModeAge - Change le front pour Age
 * @param  {Bool} isInEditModePresentation - Change le front pour Presentation
 * @param  {Func} changeEditModeFirstname - Permet le changement du Booléan { isInEditModeFirstname }
 * @param  {Func} changeEditModeLastname - Permet le changement du Booléan { isInEditModeLastname }
 * @param  {Func} changeEditModePseudo - Permet le changement du Booléan { isInEditModePseudo }
 * @param  {Func} changeEditModeAge - Permet le changement du Booléan { isInEditModeAge }
 * @param  {Func} changeEditModePresentation - Permet le changement du Booléan { isInEditModePresentation }
 * @param  {Func} changeInputProfile - Champ(s) contrôlé(s) pour le profil
 * @param  {Func} updateInputValueFirstname - Modifie dans la BDD le firstname du user
 * @param  {Func} updateInputValueLastname - Modifie dans la BDD le lastname du user
 * @param  {Func} updateInputValuePseudo - Modifie dans la BDD le Pseudo du user
 * @param  {Func} updateInputValueAge - Modifie dans la BDD le Age du user
 * @param  {Func} updateInputValuePresentation - Modifie dans la BDD le Presentation du user
 * @param  {String} oldValueFirstname - Récupère l'ancienne valeur de l'utilisateur avant de changer de mode
 * @param  {String} oldValueLastname - Récupère l'ancienne valeur de l'utilisateur avant de changer de mode
 * @param  {String} oldValuePseudo - Récupère l'ancienne valeur de l'utilisateur avant de changer de mode
 * @param  {String} oldValueAge - Récupère l'ancienne valeur de l'utilisateur avant de changer de mode
 * @param  {String} oldValuePresentation - Récupère l'ancienne valeur de l'utilisateur avant de changer de mode
 * @param  {Func} closeFirstname - Ferme le mode écriture pour le user
 * @param  {Func} closeLastname - Ferme le mode écriture pour le user
 * @param  {Func} closePseudo - Ferme le mode écriture pour le user
 * @param  {Func} closeAge - Ferme le mode écriture pour le user
 * @param  {Func} closePresentation - Ferme le mode écriture pour le user
 * @param  {Bool} isFailEdit - Permet de voir la valeur du champ
 * @param  {Func} editProfile - Permet d'envoyer dans la BDD la/les nouvelle(s) information(s) du profil user
 * @param  {Func} editProfileAvatar - Editer son profil
 * @param  {Func} FileUploadFunc - Permet de changer le state avec les infos de la photo choisie
 * @param  {String} fileUpload - Permet l'apprarition du nom de la photo et du boutton
 * @param  {String} preview - URL fictive rendu par le navigateur
 * @param  {Func} previewImage - Fonction qui ramène l'URL fictive dans le state
 */
const Informations = ({
  profile: {
    firstname,
    lastname,
    pseudo,
    age,
    presentation,
    updated_at,
    created_at,
  },
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
  editProfileAvatar,
  FileUploadFunc,
  fileUpload,
  previewImage,
  preview,
}) => {
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

  /**
   * Champ(s) controlé(s)
   * @param  {Object} event
   */
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeInputProfile(name, value);
  };

  /**
   * Récupération de J/M/A et calcul pour le mettre en année (ex: 25)
   * @param  {Object} event
   */
  const submitBday = (event) => {
    const { name, value } = event.target;
    const Bdate = value;
    const Bday = new Date(Bdate);
    const ageNow = Math.trunc(((Date.now() - Bday) / (31557600000)));
    changeInputProfile(name, String(ageNow));
  };

  /**
   * Récupération de la date pour changer son format et le mettre au format français
   * @param  {String} reviewDate
   * @returns  {String} reviewDateFormated
   */
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
    <Fragment>
      <form action="#0" className="profile-form">
        {/* CHANGER SON PSEUDO */}
        {!isInEditModePseudo && (
          <div className="profile-form-container">
            <label htmlFor="pseudo" className="profile-form-label">Pseudo</label>
            <div className="edition-mode">
              {isFailEdit ? oldValuePseudo : pseudo} {/* pseudo */}
              <button type="button" className="edition-mode-button" title="Editer" onClick={changeEditModePseudo}>
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
              <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={closePseudo}>
                <span className="edition-mode-icon"><FaRegTimesCircle /></span>
              </button>
            </div>
          </div>
        )}
        {!isInEditModeFirstname && (
          <div className="profile-form-container">
            <label htmlFor="prénom" className="profile-form-label">Prénom</label>
            <div className="edition-mode">
              {isFailEdit ? oldValueFirstname : firstname}
              <button type="button" className="edition-mode-button" title="Editer" onClick={changeEditModeFirstname}>
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
              <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={closeFirstname}>
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
              {isFailEdit ? oldValueLastname : lastname}
              <button type="button" className="edition-mode-button" title="Editer" onClick={changeEditModeLastname}>
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
              <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={closeLastname}>
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
              <button type="button" className="edition-mode-button" title="Editer" onClick={changeEditModeAge}>
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
              <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={closeAge}>
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
              {isFailEdit ? oldValuePresentation : presentation}
            </div>
            <button type="button" className="edition-mode-button" title="Editer" onClick={changeEditModePresentation}>
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
              <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={closePresentation}>
                <span className="edition-mode-icon"><FaRegTimesCircle /></span>
              </button>
            </div>
          </div>
        )}
      </form>
      <hr className="profile-hr" />
      {/* AVATAR */}
      <p className="profile-label-avatar">Avatar</p>
      <DropZone
        FileUploadFunc={FileUploadFunc}
        editProfileAvatar={editProfileAvatar}
        fileUpload={fileUpload}
        preview={preview}
        previewImage={previewImage}
      />
      <p className="profile-modification">Création du compte : <span className="profile-modification-span">{formatDate(created_at)}</span></p>
      {updated_at === null ? '' : <p className="profile-modification">Dernière modification : <span className="profile-modification-span">{formatDate(updated_at)}</span></p>}
    </Fragment>
  );
};

Informations.defaultProps = {
  profile: {
    firstname: '',
    lastname: '',
    pseudo: '',
    presentation: '',
    age: '',
    avatar: '',
    updated_at: '',
    created_at: '',
  },
};

Informations.propTypes = {
  profile: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    pseudo: PropTypes.string,
    presentation: PropTypes.string,
    avatar: PropTypes.string,
    age: PropTypes.string,
    updated_at: PropTypes.string,
    created_at: PropTypes.string,
  }),
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
  editProfileAvatar: PropTypes.func.isRequired,
  FileUploadFunc: PropTypes.func.isRequired,
  previewImage: PropTypes.func.isRequired,
  preview: PropTypes.string.isRequired,
};

export default Informations;
