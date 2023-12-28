import React from "react";



const QuestionCard = ({ currentQuestion, totalQuestions, question, optionClicked }) => {
  return (
    <div className="question-card">
      <h2>
        Question: {currentQuestion + 1} out of {totalQuestions}
      </h2>
      <h3 className="question-text">{question.text}</h3>

      <ul>
        {question.options.map((option) => (
          <li key={option.id} onClick={() => optionClicked(option.isCorrect)}>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
