/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaRegCheckCircle, FaRegEdit } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';

// == Import : local
import './profile.scss';

// == Component
const Profile = ({
  firstname,
  lastname,
  pseudo,
  presentation,
  isInEditMode,
  changeEditMode,
  changeInputProfile,
  updateInputValue,
  toggle1,
  toggle2,
  toggle3,
  collapse1,
  collapse2,
  collapse3,
}) => {
  // == fonctionnalities of the component

  const handleToggle1 = (event) => {
    const { id } = event.target;
    toggle1(id);
  };

  const handleToggle2 = (event) => {
    const { id } = event.target;
    toggle2(id);
  };

  const handleToggle3 = (event) => {
    const { id } = event.target;
    toggle3(id);
  };

  const Accordion1 = ({ title, children, id }) => (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${!collapse1 ? 'open' : ''}`}
        onClick={handleToggle1}
        id={id}
      >
        {title}
      <FaChevronDown
        className={`arrow ${!collapse1 ? 'open' : ''}`}
        id={id}
      />
      </div>
      <div className={`accordion-item ${collapse1 ? 'collapsed' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );

  const Accordion2 = ({ title, children, id }) => (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${!collapse2 ? 'open' : ''}`}
        onClick={handleToggle2}
        id={id}
      >
        {title}
      <FaChevronDown
        className={`arrow ${!collapse2 ? 'open' : ''}`}
        id={id}
      />
      </div>
      <div className={`accordion-item ${collapse2 ? 'collapsed' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );

  const Accordion3 = ({ title, children, id }) => (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${!collapse3 ? 'open' : ''}`}
        onClick={handleToggle3}
        id={id}
      >
        {title}
      <FaChevronDown
        className={`arrow ${!collapse3 ? 'open' : ''}`}
        id={id}
      />
      </div>
      <div className={`accordion-item ${collapse3 ? 'collapsed' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );


  // == Appel des fonctions venant du reducer
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeInputProfile(name, value);
  };

  const handleChangeEditMode = () => {
    changeEditMode();
  };

  const handleUpdateInputValue = () => {
    updateInputValue();
  };


  // == Fonctions pour le rendu
  const handleRenderDefaultView = () => (
    <div className="profile-layout">
      <div className="profile-container">
        <div className="profile-container-image">
          <img src="https://i.imgur.com/HgoCwpu.png" title="profile header" alt="header" className="profile-header" />
        </div>
        <div className="profile-wrapper">
          <div className="logout-container">
            <button type="submit" className="logout-container-input">
              <span className="logout-container-input-arrow"><IoIosLogOut /></span>
              <p className="logout-container-text"> déconnexion</p>
            </button>
          </div>
          <h1 className="profile-title">Mon profil</h1>
          <Accordion1 id="1" title="mes informations">
            <form action="#0" className="profile-form">
              <div className="profile-form-container">
                <label htmlFor="prénom" className="profile-form-label">Prénom</label>
                <div className="edition-mode">
                  {firstname}
                  <button type="submit" className="edition-mode-button" title="Editer" onClick={handleChangeEditMode}>
                    <span className="edition-mode-icon"><FaRegEdit /></span>
                  </button>
                </div>
              </div>
              <div className="profile-form-container">
                <label htmlFor="nom" className="profile-form-label">Nom</label>
                <div className="edition-mode">
                  {lastname}
                  <button type="submit" className="edition-mode-button" title="Editer" onClick={handleChangeEditMode}>
                    <span className="edition-mode-icon"><FaRegEdit /></span>
                  </button>
                </div>
              </div>
              <div className="profile-form-container">
                <label htmlFor="pseudo" className="profile-form-label">Changer son pseudo</label>
                <div className="edition-mode">
                  {pseudo}
                  <button type="submit" className="edition-mode-button" title="Editer" onClick={handleChangeEditMode}>
                    <span className="edition-mode-icon"><FaRegEdit /></span>
                  </button>
                </div>
                <div className="requirements">Votre pseudo doit contenir au moins 3 caractères.</div>
              </div>
            </form>
          </Accordion1>
          <Accordion2 id="2" title="ma présentation">
            <form action="#0" className="profile-form redaction">
              <div className="profile-form-container">
                <div className="edition-mode presentation" onClick={handleChangeEditMode}>
                  {presentation}
                  <textarea rows="8" className="edition-mode-button" title="Editer" />
                </div>
              </div>
            </form>
          </Accordion2>
          <Accordion3 id="3" title="questionnaire">
            <form action="#0" className="profile-form-quizz-container">
              <div className="profile-form-quizz">
                <p className="profile-form-quizz-question">Quitte à choisir, vous préféreriez être&nbsp;:</p>
                <div>
                  <input
                    type="radio"
                    id="Pizza"
                    name="choix1"
                    value="Pizza"
                  />
                  <label className="profile-form-quizz-answer" htmlFor="Pizza">une pizza</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Quiche"
                    name="choix1"
                    value="Quiche"
                  />
                  <label className="profile-form-quizz-answer" htmlFor="Quiche">une quiche</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="Hot dog"
                    name="choix1"
                    value="Hot dog"
                  />
                  <label className="profile-form-quizz-answer" htmlFor="Hot dog">un hot dog</label>
                </div>
                <p className="profile-form-quizz-question">Vite choissisez une mot, le temps presse&nbsp;:</p>
                <div>
                  <input
                    type="radio"
                    id="émerillonné"
                    name="choix2"
                    value="émerillonné"
                  />
                  <label className="profile-form-quizz-answer" htmlFor="émerillonné">émerillonné</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="mirliflore"
                    name="choix2"
                    value="mirliflore"
                  />
                  <label className="profile-form-quizz-answer" htmlFor="mirliflore">mirliflore</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="emberlucoter"
                    name="choix2"
                    value="emberlucoter"
                  />
                  <label className="profile-form-quizz-answer" htmlFor="emberlucoter">emberlucoter</label>
                </div>
                <p className="profile-form-quizz-question">Oh non&nbsp; ! Un méchant-méchant à l'horizon, transformation en&nbsp;:</p>
                <div>
                  <input
                    type="radio"
                    id="force jaune"
                    name="choix3"
                    value="force jaune"
                  />
                  <label className="profile-form-quizz-answer" htmlFor="force jaune">force jaune</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="force rouge"
                    name="choix3"
                    value="force rouge"
                  />
                  <label className="profile-form-quizz-answer" htmlFor="force rouge">force rouge</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="force noire"
                    name="choix3"
                    value="force noire"
                  />
                  <label className="profile-form-quizz-answer" htmlFor="force noire">force noire</label>
                </div>
              </div>
            </form>
          </Accordion3>
        </div>
      </div>
    </div>
  );

  const renderEditView = () => (
    <div className="profile-layout">
      <div className="profile-container">
        <div className="profile-container-image">
          <img src="https://i.imgur.com/HgoCwpu.png" title="profile header" alt="header" className="profile-header" />
        </div>
        <div className="profile-wrapper">
          <div className="logout-container">
            <button type="submit" className="logout-container-input">
              <span className="logout-container-input-arrow"><IoIosLogOut /></span>
              <p className="logout-container-text"> déconnexion</p>
            </button>
          </div>
          <h1 className="profile-title">Mon profil</h1>
          <Accordion1 id="1" title="mes informations">
            <form action="#0" className="profile-form">
              <div className="profile-form-container">
                <label htmlFor="prénom" className="profile-form-label">Prénom</label>
                <div className="edition-mode open">
                  <input
                    type="text"
                    className="edition-mode-text"
                    name="firstname"
                    value={firstname}
                    onChange={handleChange}
                  />
                  <button type="submit" className="edition-mode-button" title="Valider" onClick={handleUpdateInputValue}>
                    <span className="edition-mode-icon"><FaRegCheckCircle /></span>
                  </button>
                </div>
              </div>
              <div className="profile-form-container">
                <label htmlFor="nom" className="profile-form-label">Nom</label>
                <div className="edition-mode open">
                  <input
                    type="text"
                    className="edition-mode-text"
                    name="lastname"
                    value={lastname}
                    onChange={handleChange}
                  />
                  <button type="submit" className="edition-mode-button" title="Valider" onClick={handleUpdateInputValue}>
                    <span className="edition-mode-icon"><FaRegCheckCircle /></span>
                  </button>
                </div>
              </div>
              <div className="profile-form-container">
                <label htmlFor="pseudo" className="profile-form-label">Changer son pseudo</label>
                <div className="edition-mode open">
                  <input
                    type="text"
                    className="edition-mode-text"
                    name="pseudo"
                    value={pseudo}
                    onChange={handleChange}
                  />
                  <button type="submit" className="edition-mode-button" title="Valider" onClick={handleUpdateInputValue}>
                    <span className="edition-mode-icon"><FaRegCheckCircle /></span>
                  </button>
                </div>
                <div className="requirements">Votre pseudo doit contenir au moins 3 caractères.</div>
              </div>
            </form>
          </Accordion1>
          <Accordion2 id="2" title="ma présentation">
            <form action="#0" className="profile-form redaction">
              <div className="profile-form-container">
              <div className="edition-mode open">
                <textarea
                  type="text"
                  rows="8"
                  className="edition-mode-text"
                  name="presentation"
                  value={presentation}
                  onChange={handleChange}
                />
                <button type="submit" className="edition-mode-button" title="Valider" onClick={handleUpdateInputValue}>
                  <span className="edition-mode-icon"><FaRegCheckCircle /></span>
                </button>
              </div>
              </div>
            </form>
          </Accordion2>
          <Accordion3 id="3" title="questionnaire">
            <form action="#0" className="profile-form-quizz-container">
            <div className="profile-form-quizz">
              <p className="profile-form-quizz-question">Quitte à choisir, vous préféreriez être&nbsp;:</p>
              <div>
                <input
                  type="radio"
                  id="Pizza"
                  name="choix1"
                  value="Pizza"
                />
                <label className="profile-form-quizz-answer" htmlFor="Pizza">une pizza</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Quiche"
                  name="choix1"
                  value="Quiche"
                />
                <label className="profile-form-quizz-answer" htmlFor="Quiche">une quiche</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Hot dog"
                  name="choix1"
                  value="Hot dog"
                />
                <label className="profile-form-quizz-answer" htmlFor="Hot dog">un hot dog</label>
              </div>
              <p className="profile-form-quizz-question">Vite choissisez une mot, le temps presse&nbsp;:</p>
              <div>
                <input
                  type="radio"
                  id="émerillonné"
                  name="choix2"
                  value="émerillonné"
                />
                <label className="profile-form-quizz-answer" htmlFor="émerillonné">émerillonné</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="mirliflore"
                  name="choix2"
                  value="mirliflore"
                />
                <label className="profile-form-quizz-answer" htmlFor="mirliflore">mirliflore</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="emberlucoter"
                  name="choix2"
                  value="emberlucoter"
                />
                <label className="profile-form-quizz-answer" htmlFor="emberlucoter">emberlucoter</label>
              </div>
              <p className="profile-form-quizz-question">Oh non&nbsp; ! Un méchant-méchant à l'horizon, transformation en&nbsp;:</p>
              <div>
                <input
                  type="radio"
                  id="force jaune"
                  name="choix3"
                  value="force jaune"
                />
                <label className="profile-form-quizz-answer" htmlFor="force jaune">force jaune</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="force rouge"
                  name="choix3"
                  value="force rouge"
                />
                <label className="profile-form-quizz-answer" htmlFor="force rouge">force rouge</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="force noire"
                  name="choix3"
                  value="force noire"
                />
                <label className="profile-form-quizz-answer" htmlFor="force noire">force noire</label>
              </div>
            </div>
            </form>
          </Accordion3>
        </div>
      </div>
    </div>
  );

  return (
    isInEditMode ? renderEditView() : handleRenderDefaultView()
  );
};

// == Export
export default Profile;

Profile.defaultProps = {
  firstname: '',
  lastname: '',
  pseudo: '',
  presentation: '',
  title: '',
  children: '',
};

Profile.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  pseudo: PropTypes.string,
  presentation: PropTypes.string,
  isInEditMode: PropTypes.bool.isRequired,
  changeEditMode: PropTypes.func.isRequired,
  changeInputProfile: PropTypes.func.isRequired,
  updateInputValue: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.string,
  collapse1: PropTypes.bool.isRequired,
  toggle1: PropTypes.func.isRequired,
  collapse2: PropTypes.bool.isRequired,
  toggle2: PropTypes.func.isRequired,
  collapse3: PropTypes.bool.isRequired,
  toggle3: PropTypes.func.isRequired,
};
