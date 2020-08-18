/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { Fragment, useEffect } from 'react';
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
          { choices.map(({ choice_content, id, question_content }) => (
            <div>
              <p>{question_content}</p>
              {/* <p>Votre réponse à la question {question_id}</p> */}
              <p key={id} className="profile-select-p--default">{choice_content}</p>
            </div>
          )) }
          { questions.map(({ id, question_content, response }) => (
            <div key={id} className="profile-form-quizz">
              <label htmlfort={`question${id}`} className="profile-form-quizz-question">{question_content}</label><br />
              {response.map(({ id, choice_content, question_id }) => (
                <div className="profile-form-quizz-answers">
                  <input
                    type="radio"
                    key={id}
                    id={id}
                    name={`testBody${question_id}`}
                    onClick={handleGetIdOptions}
                    value={choice_content}
                    className="profile-select-option"
                    required
                  />
                  <label htmlFor={id}>{choice_content}</label><br />
                </div>
              ))}
            </div>
          )) }
          <div className="logout-container">
            <button type="button" onClick={submitQuestions} className="profile-select-button">Sauvegarder</button>
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
