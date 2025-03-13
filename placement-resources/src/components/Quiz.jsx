import React, { useState } from 'react';
import './Quiz.css';

const quizQuestions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Tool"],
    correct: 0
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (optionIndex) => {
    if (optionIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setSelectedAnswer(optionIndex);
  };

  return (
    <div className="quiz">
      <h2>Placement Quiz</h2>
      <div className="quiz-card">
        <h3>{quizQuestions[currentQuestion].question}</h3>
        <div className="options">
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`option-btn ${
                selectedAnswer === index ? (index === quizQuestions[currentQuestion].correct ? 'correct' : 'wrong') : ''
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {selectedAnswer !== null && (
          <button 
            className="btn"
            onClick={() => {
              setCurrentQuestion(currentQuestion + 1);
              setSelectedAnswer(null);
            }}
          >
            Next Question
          </button>
        )}
        <p className="score">Score: {score}</p>
      </div>
    </div>
  );
};

export default Quiz;