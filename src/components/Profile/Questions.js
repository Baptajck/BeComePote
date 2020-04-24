/* eslint-disable no-shadow */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';


const Questions = ({
  questions, submitQuestions, getIdOptions,
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
    <>
      <form action="#0" className="profile-form profile-form-quizz-container" onSubmit={handleSubmitChoices}>
        {/* QUESTIONS */}
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
    </>
  );
};

Questions.propTypes = {
  questions: PropTypes.array.isRequired,
  submitQuestions: PropTypes.func.isRequired,
  getIdOptions: PropTypes.func.isRequired,
};

export default Questions;
