/* eslint-disable react/jsx-fragments */
import React from 'react';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import './customPrompt.scss';

/**
 * @param  {Bool} show - Booléan permettant de voir le prompt ou pas
 * @param  {String} message - Le message principal du prompt
 * @param  {func} deleteProfile - Function permettant la suppresion du profile utilisateur
 * @param  {func} cancel - Function permettant le retour sans suppression du prompt
 */
const CustomPrompt = ({
  show, message, deleteProfile, cancel,
}) => {
  if (!show) return null;
  return (
    <React.Fragment>
      <div className="prompt">
        <div className="prompt-1">
          <div className="prompt-head">
            <h3 className="prompt-head-title">Supprimer son compte <span className="prompt-head-title--span" onClick={cancel}><MdClose /></span></h3>
          </div>
          <div className="prompt-message">{message}</div>
          <div className="prompt-buttons">
            <button type="button" className="prompt-buttons-item--cancel" onClick={cancel}>Refuser</button>
            <button type="button" className="prompt-buttons-item--confirm" onClick={deleteProfile}>Confirmer</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

CustomPrompt.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default CustomPrompt;
