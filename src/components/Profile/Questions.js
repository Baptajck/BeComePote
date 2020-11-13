/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { errorOrNot } from 'src/utils/Errors';
/**
 * @param  {Object} questions - Toutes les questions et réponses reliées
 * @param  {Func} submitQuestions - Permet de mettre les réponses du user dans la BDD
 * @param  {Func} getIdOptions - Récupérer l'id de la réponse au click
 * @param  {Object} responses - Récupérèes les réponses
 * @param  {Object} choices - Les choix du user
 * @param  {Func} getChoices - Récupère les choix du user
 * @param  {Bool} mounted - Booléan pour mettre a jour le profil
 */
const Questions = ({
  questions, submitQuestions, getIdOptions, responses, choices, getChoices, mounted,
}) => {
  const [checked, setChecked] = useState();
  useEffect(() => {
    if (mounted) {
      getChoices();
    }
  }, [mounted]);

  /**
   * @param  {Object} event
   */
  const handleGetIdOptions = (event) => {
    const { attributes, id } = event.target;
    getIdOptions(attributes.name.value, +id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChecked(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    submitQuestions()
  }


  return (
    <Fragment>
      <form action="#0" className="profile-form profile-form-quizz-container">
        {/* QUESTIONS */}
        {errorOrNot({
          param1: responses.message,
          param2: 'Your three choices have been saved',
          errorItem: 'good',
          text: 'Tes réponses ont bien été mises à jour',
        })}


        <div className="profile-select">

          {choices.length !== 0 && (
            <div className="profile-response">
              <h3 className="profile-response-title">Vos {checked === false && "nouvelle(s) "} Réponse(s) : </h3>
              {
                choices.map(({ choice_content, id, question_content }) => (
                  <div key={id} className="profile-response-container">
                    <p className="profile-response-text">{question_content}</p>
                    <p className="profile-response-choice"> > {choice_content}</p>
                  </div>
                ))
              }
            <hr className="profile-response-hr"/>
            </div>
          )}

          {
            questions.map(({ id, question_content, response }, i) => (
              <div key={i} className="profile-form-quizz">
                <label htmlfort={`question${id}`} className="profile-form-quizz-question">{question_content}</label><br />
                {response.map(({ id, choice_content, question_id }, o) => (
                  <div key={o} className="profile-form-quizz-answers">
                    <input
                      type="radio"
                      id={id}
                      name={`testBody${question_id}`}
                      onClick={handleGetIdOptions}
                      value={choice_content}
                      className="profile-select-option"
                      // required
                    />
                    <label htmlFor={id}>{choice_content}</label><br />
                  </div>
                ))}
              </div>
            ))
          }


          <div className="logout-container">
            <button type="button" onClick={handleSubmit} className="profile-select-button">Sauvegarder</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

Questions.defaultProps = {
  responses: {},
  // questions: {},
  // choices: {},
};

Questions.propTypes = {
  // questions: PropTypes.array,
  // choices: PropTypes.array,
  submitQuestions: PropTypes.func.isRequired,
  getIdOptions: PropTypes.func.isRequired,
  responses: PropTypes.object,
};

export default Questions;
