import React, { useState } from "react";
import "./App.css";
import QuestionCard from "./Components/QuestionCard";
import FinalResults from "./Components/FinalResult";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const questions = [
    {
      text: "Net nitrogen immobilization in soil occurs if C/N is?",
      options: [
        { id: 0, text: "Less than 20:1", isCorrect: false },
        { id: 1, text: "Greater than 20:1", isCorrect: false },
        { id: 2, text: "Greater than 35:1", isCorrect: true },
        { id: 3, text: "Less than 15:1", isCorrect: false },
        { id: 4, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Individually, which among the following soil organisms have the least biomass?",
      options: [
        { id: 0, text: "Actinomycetes", isCorrect: false },
        { id: 1, text: "Fungi", isCorrect: false },
        { id: 2, text: "Bacteria", isCorrect: true },
        { id: 3, text: "Protozoa", isCorrect: false },
        { id: 4, text: "Earthworm", isCorrect: false },
      ],
    },
    {
      text: "Which among the following soil organisms are acid-loving?",
      options: [
        { id: 0, text: "Fungi", isCorrect: true },
        { id: 1, text: "Protozoa", isCorrect: false },
        { id: 2, text: "Bacteria", isCorrect: false },
        { id: 3, text: "Actinomycetes", isCorrect: false },
        { id: 4, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Soil microorganisims degrade organic residues primarily for?",
      options: [
        { id: 0, text: "Phosphorus and ATP", isCorrect: false },
        { id: 1, text: "Carbon and Energy", isCorrect: true },
        { id: 2, text: "Nitrogen and energy", isCorrect: false },
        { id: 3, text: "phophorus and energy", isCorrect: false },
        { id: 4, text: "Nitrogen and phosphorus", isCorrect: false },
      ],
    },
    {
      text: "Ammonia volatilization from NH4+ bearing fertilizers is not favored by which of the following?",
      options: [
        { id: 0, text: "High pH", isCorrect: false },
        { id: 1, text: "High temperature", isCorrect: false },
        { id: 2, text: "High CEC", isCorrect: true },
        { id: 3, text: "Moisture", isCorrect: false },
        { id: 4, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "The root-nodule bacteria belong to the genus?",
      options: [
        { id: 0, text: "Clostridum", isCorrect: false },
        { id: 1, text: "Azotobacter", isCorrect: false },
        { id: 2, text: "Rhizobium", isCorrect: true },
        { id: 3, text: "Agrobacterium", isCorrect: false },
        { id: 4, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "The anaerobic non-symbiotic nitrogen fixing bacteria belong to the genus?",
      options: [
        { id: 0, text: "Derxia", isCorrect: false },
        { id: 1, text: "Clostridium", isCorrect: true },
        { id: 2, text: "Azotobacter", isCorrect: false },
        { id: 3, text: "Bradyrhizobium", isCorrect: false },
        { id: 4, text: "Nitrobacter", isCorrect: false },
      ],
    },
    {
      text: "Algae are considered as?",
      options: [
        { id: 0, text: "Autotrophs", isCorrect: false },
        { id: 1, text: "Photoautotrophs", isCorrect: true },
        { id: 2, text: "Chemoautotrophs", isCorrect: false },
        { id: 3, text: "Both a and b above", isCorrect: false },
        { id: 4, text: "None of the above", isCorrect: false },
      ],
    }, 
    {
      text: "The source of energy for blue-green algae is?",
      options: [
        { id: 0, text: "Sunlight", isCorrect: true },
        { id: 1, text: "Metabolism of glucose", isCorrect: false },
        { id: 2, text: "Organic matter decomposition", isCorrect: false },
        { id: 3, text: "Oxidation of inorganic compounds", isCorrect: false },
        { id: 4, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "The predominant avaiiabie form of N under flooded soil condition is?",
      options: [
        { id: 0, text: "N03-N", isCorrect: false },
        { id: 1, text: "Organic-N", isCorrect: false },
        { id: 2, text: "NH2-N", isCorrect: true },
        { id: 3, text: "NO2-N", isCorrect: false },
        { id: 4, text: "NH2-N", isCorrect: false },
      ],
    }
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Licensure Exam for Agriculture QUIZ</h1>
      <h2>Score: {score}</h2>
      {showResults ? (
        <FinalResults
        score={score}
        totalQuestions={questions.length}
        restartGame={restartGame}
      />

      ) : (
        <QuestionCard
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          question={questions[currentQuestion]}
          optionClicked={optionClicked}
        />
      )}
    </div>
  );
}

export default App;
