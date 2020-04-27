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

// == Component
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
  mounted,
}) => {
  useEffect(() => {
    getProfile();
    getQuestions();
    getChoices();
    console.log('je suis le deuxième BITCH');
  }, []);

  return (
    <div className="profile-layout">
      <div className="profile-container">
        <div className="profile-container-image">
          <img src="https://i.imgur.com/HgoCwpu.png" title="profile header" alt="header" className="profile-header" />
        </div>
        <div className="profile-wrapper">
          <h1 className="profile-title">Mon profil</h1>
          <Tabs>
            {/* INFORMATIONS */}
            <div label="Infos">
              <div className="profile-form-info">
                <Informations
                  profile={profile}
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
