/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  FaChevronDown, FaArrowRight, FaRegTimesCircle, FaRegCheckCircle, FaRegEdit,
} from 'react-icons/fa';

// == Import : local
import './profile.scss';

// == Composant
const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
        <FaChevronDown className={`arrow ${isOpen ? 'open' : ''}`} />
      </div>
      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

// == Class
class Profile extends React.Component {
  changeEditMode = () => {
    const { changeEditMode } = this.props;
    changeEditMode();
  };

  handleChange = (event) => {
    const { changeInputProfile } = this.props;
    const { name, value } = event.target;
    changeInputProfile(name, value);
  };

  updateInputValue = () => {
    const { updateInputValue } = this.props;
    updateInputValue();
  };

  closeToAction = () => {
    const { updateInputValue, firstname } = this.props;
    if (!updateInputValue) {
      this.newTextInput.current.value;
    }
  };


  renderEditView = () => {
    this.newTextInput = React.createRef();
    const { firstname } = this.props;
    return (
      <div className="edition-mode open">
        <input
          type="text"
          // defaultValue={firstname}
          className="edition-mode-text"
          name="firstname"
          ref={this.newTextInput}
          value={firstname.trim()}
          onChange={this.handleChange}
        />
        <button type="button" className="edition-mode-button" title="Valider" onClick={this.updateInputValue}>
          <span className="edition-mode-icon"><FaRegCheckCircle /></span>
        </button>
        <button type="button" className="edition-mode-button" title="Annuler les changements" onClick={this.changeEditMode}>
          <span className="edition-mode-icon"><FaRegTimesCircle /></span>
        </button>
      </div>
    );
  };

  renderDefaultView = () => {
    const { firstname } = this.props;
    return (
    <div className="edition-mode">
      {firstname}
      <button type="button" className="edition-mode-button" title="Editer" onClick={this.changeEditMode}>
        <span className="edition-mode-icon"><FaRegEdit /></span>
      </button>
    </div>
    );
  };

  render() {
    console.log(this.props);
    const { firstname, isInEditMode } = this.props;
    return (
      isInEditMode ? this.renderEditView() : this.renderDefaultView()
    // <div className="profile-layout">
    //   <div className="profile-container">
    //     <div className="profile-container-image">
    //       <img src="https://i.imgur.com/HgoCwpu.png" title="profile header" alt="header" className="profile-header" />
    //     </div>
    //     <div className="profile-wrapper">
    //       <h1 className="profile-title">Mon profil</h1>
    //       <Accordion title="modifier mes informations">
    //         <form action="#0" className="profile-form">
    //           <div className="profile-form-container">
    //            <label htmlFor="prénom" className="profile-form-label">Prénom</label>
    //            <input
    //              type="text"
    //              title="Veuillez renseigner votre prénom"
    //              id="prénom"
    //              name="prénom"
    //              className="profile-form-input"
    //              minLength="3"
    //              maxLength="24"
    //              required
    //              value={value}
    //              onClick={changeToEditMode}
    //             />
    //            </div>
    //           <div className="profile-form-container">
    //             <label htmlFor="nom" className="profile-form-label">Nom</label>
    //             <input
    //               type="text"
    //               title="Veuillez renseigner votre nom"
    //               id="nom"
    //               name="nom"
    //               className="profile-form-input"
    //               minLength="3"
    //               maxLength="24"
    //               required
    //               placeholder=" "
    //             />
    //           </div>
    //           <div className="profile-form-container">
    //             <label htmlFor="pseudo" className="profile-form-label">Changer son pseudo</label>
    //             <input
    //               type="text"
    //               title="Veuillez renseigner votre pseudo"
    //               id="pseudo"
    //               name="pseudo"
    //               className="profile-form-input"
    //               minLength="3"
    //               maxLength="15"
    //               required
    //               placeholder=" "
    //             />
    //             <div className="requirements">Votre pseudo doit contenir au moins 3 caractères.</div>
    //           </div>
    //         </form>
    //       </Accordion>
    //       <Accordion title="ma présentation">
    //         <form action="#0" className="profile-form">
    //           <div className="profile-form-container">
    //             <label htmlFor="prénom" className="profile-form-label">Une description sur vous que tout le monde pourra lire</label>
    //             <textarea
    //               type="textarea"
    //               title="Veuillez renseigner votre prénom"
    //               id="prénom"
    //               name="prénom"
    //               className="profile-form-input"
    //               minLength="20"
    //               required
    //               placeholder="remplir votre description ici... "
    //             />
    //           </div>
    //         </form>
    //       </Accordion>
    //       <Accordion title="en dire un peu plus...">
    //         <form action="#0" className="profile-form">
    //           <div className="profile-form-container">
    //             <label htmlFor="prénom" className="profile-form-label">Prénom</label>
    //             <input
    //               type="textarea"
    //               title="Veuillez renseigner votre prénom"
    //               id="prénom"
    //               name="prénom"
    //               className="profile-form-input"
    //               minLength="3"
    //               maxLength="24"
    //               required
    //               placeholder=" "
    //             />
    //           </div>
    //         </form>
    //       </Accordion>
    //     </div>
    //     <div className="logout-container">
    //       <button type="submit" className="logout-container-input">
    //         Se déconnecter
    //         <span className="logout-container-input-arrow"><FaArrowRight /></span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    );
  }
}

// == Export
export default Profile;

Accordion.defaultProps = {
  title: '',
  children: '',
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

Profile.propTypes = {
  firstname: PropTypes.string.isRequired,
  isInEditMode: PropTypes.bool.isRequired,
  changeEditMode: PropTypes.func.isRequired,
  changeInputProfile: PropTypes.func.isRequired,
  updateInputValue: PropTypes.func.isRequired,
};
