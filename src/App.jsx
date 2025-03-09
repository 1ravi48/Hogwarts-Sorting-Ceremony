import "./App.css";
import HouseColourBackground from "./components/HouseColourBackground/HouseColourBackground";
import { useState } from "react";
import AnswerChoice from "./components/AnswerChoice/AnswerChoice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [isHatHover, setIsHatHover] = useState(false);
  const [question, setQuestion] = useState(0);
  const [isBackHover, setIsBackHover] = useState(false);

  function handleHatHover() {
    setIsHatHover(true);
  }

  function handleHatLeave() {
    setIsHatHover(false);
  }

  function handleHatClick() {
    setQuestion(question + 1);
    setIsBackHover(false);
  }

  function handleBackHover() {
    setIsBackHover(true);
  }

  function handleBackLeave() {
    setIsBackHover(false);
  }

  function handleBackClick() {
    setQuestion(question - 1);
    setIsHatHover(false);
  }

  return (
    <div className="page">
      {question === 0 ? (
        <div className="four-colours">
          <HouseColourBackground
            backgroundColor="#95103b"
            imagePath="../public/gryffindor-logo.png"
          />
          <HouseColourBackground
            backgroundColor="#1d7452"
            imagePath="../public/slytherin-logo.png"
          />
          <HouseColourBackground
            backgroundColor="#97b6d3"
            imagePath="../public/ravenclaw-logo.png"
          />
          <HouseColourBackground
            backgroundColor="#ffebb9"
            imagePath="../public/hufflepuff-logo.png"
          />
          <img
            src="../public/hogwarts-sorting-hat.png"
            className={isHatHover ? "sorting-hat-enlarged" : "sorting-hat"}
            onMouseEnter={handleHatHover}
            onMouseLeave={handleHatLeave}
            onClick={handleHatClick}
          />
          <p
            className={isHatHover ? "sorting-hat-greet" : "sorting-hat-not-greet"}
            onMouseEnter={handleHatHover}
            onMouseLeave={handleHatLeave}
            onClick={handleHatClick}
          >
            Let's begin the <br /> sorting ceremony...
          </p>
        </div>
      ) : (
        <div className="answer-choices">
          <AnswerChoice />
          <AnswerChoice />
          <AnswerChoice />
          <AnswerChoice />
          <img src="/parchment.png" className="parchment"></img>
          <h1 className="question-heading">Question 1</h1>
          <p className="question-text">
            Here is an example of a question. What is your favourite colour?
          </p>
          <FontAwesomeIcon
            icon={faBackward}
            className={isBackHover ? "backward-icon-enlarged" : "backward-icon"}
            onMouseEnter={handleBackHover}
            onMouseLeave={handleBackLeave}
            onClick={handleBackClick}
          />
        </div>
      )}
    </div>
  );
}
