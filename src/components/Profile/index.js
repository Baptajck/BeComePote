/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
// == Import : npm
import React, { useEffect } from 'react';

// == Import : local
import './profile.scss';
import Tabs from 'src/utils/Tabs/Tabs';
import Questions from './Questions';
import Informations from './Informations';
import Account from './Account';

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
 * @param  {Func} getProfile - Récupère les données du user
 * @param  {Func} getLogout - Permet la déconnection du user
 * @param  {Func} deleteProfile - Permet la suppression du user
 * @param  {Func} getQuestions - Récupère les questions
 * @param  {Object} questions - Object avec toutes les questions
 * @param  {Func} submitQuestions - Envoie des réponses à la BDD
 * @param  {Func} getIdOptions - Récupère l'id du champ
 * @param  {Object} responses - Les réponses aux questions
 * @param  {Bool} show - Permet de voir le prompt
 * @param  {Func} showPrompt - Voir la prompt
 * @param  {Bool} showPromptCancel - Ne plus voir la prompt
 * @param  {Object} choices - les chois du user
 * @param  {Func} getChoices - Récupère les choix dans la BDD
 * @param  {Func} editProfileAvatar - Editer son profil
 * @param  {Bool} mounted - Permet le changement des données une fois édité
 * @param  {Func} FileUploadFunc - Permet de changer le state avec les infos de la photo choisie
 * @param  {String} fileUpload - Permet l'apprarition du nom de la photo et du boutton
 * @param  {String} preview - URL fictive rendu par le navigateur
 * @param  {Func} previewImage - Fonction qui ramène l'URL fictive dans le state
 */
const Profile = ({
  // == Toutes les informations
  profile,
  // Tout ce qui est nécessaire pour que tout fonctionne indépendamment
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
  // == Pouvoir éditer/supprimer/déconnecter et récupérer le profile
  editProfile,
  getProfile,
  getLogout,
  deleteProfile,
  // == Tout ce qui concerne la partie questions
  getQuestions,
  questions,
  submitQuestions,
  getIdOptions,
  responses,
  show,
  // == Prompt
  showPrompt,
  showPromptCancel,
  choices,
  getChoices,
  editProfileAvatar,
  mounted,
  FileUploadFunc,
  fileUpload,
  previewImage,
  preview,
}) => {
  useEffect(() => {
    getProfile();
    getQuestions();
    getChoices();
  }, []);
  useEffect(() => {
    if (mounted) {
      getProfile();
    }
  }, [mounted]);

  return (
    <div className="profile-layout">
      <div className="profile-container">
        <div className="profile-container-image">
          <img src={profile.avatar} title="profile header" alt="header" className="profile-header" />
        </div>
        <div className="profile-wrapper">
          <h1 className="profile-title">Mon profil</h1>
          <Tabs>
            {/* INFORMATIONS */}
            <div label="Infos">
              <div className="profile-form-info">
                <Informations
                  profile={profile}
                  preview={preview}
                  previewImage={previewImage}
                  FileUploadFunc={FileUploadFunc}
                  fileUpload={fileUpload}
                  isInEditModeFirstname={isInEditModeFirstname}
                  isInEditModeLastname={isInEditModeLastname}
                  isInEditModePseudo={isInEditModePseudo}
                  isInEditModeAge={isInEditModeAge}
                  isInEditModePresentation={isInEditModePresentation}
                  changeEditModeFirstname={changeEditModeFirstname}
                  changeEditModeLastname={changeEditModeLastname}
                  changeEditModePseudo={changeEditModePseudo}
                  changeEditModeAge={changeEditModeAge}
                  changeEditModePresentation={changeEditModePresentation}
                  changeInputProfile={changeInputProfile}
                  updateInputValueFirstname={updateInputValueFirstname}
                  updateInputValueLastname={updateInputValueLastname}
                  updateInputValuePseudo={updateInputValuePseudo}
                  updateInputValueAge={updateInputValueAge}
                  updateInputValuePresentation={updateInputValuePresentation}
                  oldValueFirstname={oldValueFirstname}
                  oldValueLastname={oldValueLastname}
                  oldValuePseudo={oldValuePseudo}
                  oldValueAge={oldValueAge}
                  oldValuePresentation={oldValuePresentation}
                  closeFirstname={closeFirstname}
                  closeLastname={closeLastname}
                  closePseudo={closePseudo}
                  closeAge={closeAge}
                  closePresentation={closePresentation}
                  isFailEdit={isFailEdit}
                  editProfile={editProfile}
                  editProfileAvatar={editProfileAvatar}
                />
              </div>
            </div>
            {/* QUESTIONS */}
            <div className="profile-form-subtitle" label="Questions">
              <Questions
                mounted={mounted}
                getChoices={getChoices}
                choices={choices}
                questions={questions}
                getIdOptions={getIdOptions}
                submitQuestions={submitQuestions}
                responses={responses}
              />
            </div>
            {/* COMPTE */}
            <div label="Compte">
              <Account
                showPrompt={showPrompt}
                showPromptCancel={showPromptCancel}
                show={show}
                getLogout={getLogout}
                deleteProfile={deleteProfile}
              />
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

// == Export
export default Profile;
