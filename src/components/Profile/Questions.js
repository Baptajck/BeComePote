/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-fragments */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Questions = ({
  questions, submitQuestions, getIdOptions, responses, choices,
}) => {
  const handleSubmitChoices = (event) => {
    event.preventDefault();
    submitQuestions();
  };

  const handleGetIdOptions = (event) => {
    const { attributes, id } = event.target;
    getIdOptions(attributes.name.value, +id);
  };

  return (
    <Fragment>
      <form action="#0" className="profile-form profile-form-quizz-container" onSubmit={handleSubmitChoices}>
        {/* QUESTIONS */}
        {responses.message === 'Your three choices have been saved' ? <p className="profile-message"> <span className="profile-message--message">Tes réponses ont bien été mises à jour</span></p> : '' }
        <div className="profile-select">
          { choices.map(({ choice_content, id, question_id }) => (
            <div>
              <p>Votre réponse à la question {question_id} </p>
              <option key={id} className="profile-select-option--default" value="DEFAULT" disabled>{choice_content}</option>
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
                  />
                  <label>{choice_content}</label><br />
                </div>
              ))}
            </div>
          )) }
          <div className="logout-container">
            <button type="submit" className="profile-select-button">Sauvegarder</button>
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
