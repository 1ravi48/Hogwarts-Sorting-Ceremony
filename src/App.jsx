import "./App.css";
import HouseColourBackground from "./components/HouseColourBackground/HouseColourBackground";
import { useState } from "react";
import AnswerChoice from "./components/AnswerChoice/AnswerChoice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const questionsArray = [
  {
    questionNumber: 1,
    questionText:
      "This is question number 1. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 2,
    questionText:
      "This is question number 2. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 3,
    questionText:
      "This is question number 3. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 4,
    questionText:
      "This is question number 4. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 5,
    questionText:
      "This is question number 5. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 6,
    questionText:
      "This is question number 6. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 7,
    questionText:
      "This is question number 7. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 8,
    questionText:
      "This is question number 8. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 9,
    questionText:
      "This is question number 9. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 10,
    questionText:
      "This is question number 10. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 11,
    questionText:
      "This is question number 11. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 12,
    questionText:
      "This is question number 12. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 13,
    questionText:
      "This is question number 13. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 14,
    questionText:
      "This is question number 14. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
  {
    questionNumber: 15,
    questionText:
      "This is question number 15. Please answer the question being asked of you by selection one of the four options",
    answerChoices: [
      "This is the answer pertaining to Gryffindor",
      "This is the answer pertaining to Slytherin",
      "This is the answer pertaining to Ravenclaw",
      "This is the answer pertaining to Hufflepuff",
    ],
  },
];

const scoresArray = [
  { house: "gryffindor", score: 0 },
  { house: "slytherin", score: 0 },
  { house: "ravenclaw", score: 0 },
  { house: "hufflepuff", score: 0 },
];

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
  } else if (question >= 1 && question <= 15) {
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
