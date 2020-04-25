/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Questions = ({
  questions, submitQuestions, getIdOptions, responses,
}) => {
  const handleSubmitChoices = () => {
    submitQuestions();
  };

  const handleGetIdOptions = (event) => {
    const { attributes, id } = event.target;
    getIdOptions(attributes.name.value, +id);
  };
  return (
    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      <form action="#0" className="profile-form profile-form-quizz-container" onSubmit={handleSubmitChoices}>
        {/* QUESTIONS */}
        {responses.message === 'Your three choices have been saved' ? <p className="profile-message"> <span className="profile-message--message">Tes réponses ont bien été mises à jour</span></p> : '' }
        <div className="profile-select">
          {questions.map(({ id, question_content, response }) => (
            <div key={id} className="profile-form-quizz">
              <label htmlfort="question" className="profile-form-quizz-question">{question_content}</label>
              <select id="question" className="select" defaultValue="DEFAULT">
                <option className="profile-select-option" value="DEFAULT" disabled> </option>
                {response.map(({ id, choice_content, question_id }) => (
                  <option
                    key={id}
                    id={id}
                    name={`testBody${question_id}`}
                    onClick={handleGetIdOptions}
                    value={choice_content}
                    className="profile-select-option"
                  >
                    {choice_content}
                  </option>
                ))}
              </select>
            </div>
          ))}
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
};

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  submitQuestions: PropTypes.func.isRequired,
  getIdOptions: PropTypes.func.isRequired,
  responses: PropTypes.object,
};

export default Questions;
