import "./App.css";
import HouseColourBackground from "./components/HouseColourBackground/HouseColourBackground";
import { useState } from "react";
import AnswerChoice from "./components/AnswerChoice/AnswerChoice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [isHatHover, setIsHatHover] = useState(false);
  const [question, setQuestion] = useState(0);

  function handleHatHover() {
    setIsHatHover(true);
  }

  function handleHatLeave() {
    setIsHatHover(false);
  }

  function handleHatClick() {
    setQuestion(question + 1);
  }

  function handleBackClick() {
    setQuestion(question - 1);
    setIsHatHover(false);
  }

  function handleAnswerSelection() {
    setQuestion(question + 1);
  }

  let pageContent;

  if (question === 0) {
    pageContent = (
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
    );
  } else if (question >= 1 && question <= 10) {
    pageContent = (
      <div className="answer-choices">
        <AnswerChoice onAnswerClick={handleAnswerSelection} />
        <AnswerChoice onAnswerClick={handleAnswerSelection} />
        <AnswerChoice onAnswerClick={handleAnswerSelection} />
        <AnswerChoice onAnswerClick={handleAnswerSelection} />
        <img src="/parchment.png" className="parchment"></img>
        <h1 className="question-heading">Question {question}</h1>
        <p className="question-text">
          Here is an example of a question. What is your favourite colour?
        </p>
        <FontAwesomeIcon
          icon={faBackward}
          className="backward-icon"
          onClick={handleBackClick}
        />
      </div>
    );
  } else {
    pageContent = <p>You have finished the quiz</p>;
  }

  return <div className="page">{pageContent}</div>;
}
