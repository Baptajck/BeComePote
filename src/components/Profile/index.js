/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
  getProfile,
  getLogout,
  deleteProfile,
  getQuestions,
  questions,
  submitQuestions,
  getIdOptions,
}) => {
  useEffect(() => {
    getProfile();
    getQuestions();
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
              firstname={firstname}
              lastname={lastname}
              pseudo={pseudo}
              age={age}
              presentation={presentation}
              updated_at={updated_at}
              created_at={created_at}
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
                questions={questions}
                getIdOptions={getIdOptions}
                submitQuestions={submitQuestions}
              />
          </div>
          {/* COMPTE */}
            <div label="Compte">
            <Account
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
