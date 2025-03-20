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
      "This is question number 1. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 2,
    questionText:
      "This is question number 2. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 3,
    questionText:
      "This is question number 3. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 4,
    questionText:
      "This is question number 4. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 5,
    questionText:
      "This is question number 5. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 6,
    questionText:
      "This is question number 6. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 7,
    questionText:
      "This is question number 7. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 8,
    questionText:
      "This is question number 8. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 9,
    questionText:
      "This is question number 9. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 10,
    questionText:
      "This is question number 10. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 11,
    questionText:
      "This is question number 11. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 12,
    questionText:
      "This is question number 12. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 13,
    questionText:
      "This is question number 13. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 14,
    questionText:
      "This is question number 14. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
  {
    questionNumber: 15,
    questionText:
      "This is question number 15. Please answer the question being asked of you by selecting one of the four options",
    answerChoices: [
      "This is the answer linked to Gryffindor",
      "This is the answer linked to Slytherin",
      "This is the answer linked to Ravenclaw",
      "This is the answer linked to Hufflepuff",
    ],
  },
];

const scoresArray = [0, 0, 0, 0];

let scoreTracker = "";

const scoreTrackerHistory = [];

const fourHouses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

export default function App() {
  const [isHatHover, setIsHatHover] = useState(false);
  const [question, setQuestion] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [resultContent, setResultContent] = useState(<p></p>);

  function handleHatHover() {
    setIsHatHover(true);
  }

  function handleHatLeave() {
    setIsHatHover(false);
  }

  function handleHatClick() {
    setQuestion(question + 1);
    setShuffledAnswers(shuffleArray(questionsArray[0].answerChoices));
  }

  function handleBackClick() {
    if (scoreTracker === "gryffindor") {
      scoresArray[0] = scoresArray[0] - 1;
    } else if (scoreTracker === "slytherin") {
      scoresArray[1] = scoresArray[1] - 1;
    } else if (scoreTracker === "ravenclaw") {
      scoresArray[2] = scoresArray[2] - 1;
    } else if (scoreTracker === "hufflepuff") {
      scoresArray[3] = scoresArray[3] - 1;
    }

    scoreTracker = scoreTrackerHistory.pop();
    const prevQuestion = question - 1;
    setQuestion(prevQuestion);
    setIsHatHover(false);
    if (prevQuestion > 0) {
      setShuffledAnswers(
        shuffleArray(questionsArray[prevQuestion - 1].answerChoices)
      );
    }

    console.log(scoreTracker);
    console.log(scoreTrackerHistory);
    console.log(scoresArray);
  }

  function handleAnswerSelection(event) {
    const answerSelection = event.target.textContent;
    if (answerSelection === questionsArray[question - 1].answerChoices[0]) {
      scoresArray[0] = scoresArray[0] + 1;
    } else if (
      answerSelection === questionsArray[question - 1].answerChoices[1]
    ) {
      scoresArray[1] = scoresArray[1] + 1;
    } else if (
      answerSelection === questionsArray[question - 1].answerChoices[2]
    ) {
      scoresArray[2] = scoresArray[2] + 1;
    } else {
      scoresArray[3] = scoresArray[3] + 1;
    }
    scoreTrackerHistory.push(scoreTracker);
    if (answerSelection === questionsArray[question - 1].answerChoices[0]) {
      scoreTracker = "gryffindor";
    } else if (
      answerSelection === questionsArray[question - 1].answerChoices[1]
    ) {
      scoreTracker = "slytherin";
    } else if (
      answerSelection === questionsArray[question - 1].answerChoices[2]
    ) {
      scoreTracker = "ravenclaw";
    } else {
      scoreTracker = "hufflepuff";
    }
    setQuestion(question + 1);
    setShuffledAnswers(
      shuffleArray(questionsArray[question - 1].answerChoices)
    );

    console.log(scoreTracker);
    console.log(scoreTrackerHistory);
    console.log(scoresArray);
  }

  function handleResultClick() {
    if (isOnlyHighestScore()) {
      if (isOnlySecondHighestScore()) {
        setResultContent(
          <div className="results-page">
            <img
              src="../public/hogwarts-sorting-hat.png"
              className="sorting-hat-result"
            />
            <p className="result-text">
              You belong {winningHouse()}, but with traits of {secondHouse()}{" "}
              too.
            </p>
          </div>
        );
      } else {
        setResultContent(
          <div className="results-page">
            <img
              src="../public/hogwarts-sorting-hat.png"
              className="sorting-hat-result"
            />
            <p className="result-text">You belong to {winningHouse()} only.</p>
          </div>
        );
      }
    } else {
      if (occurrencesOfHighestScore() === 2) {
        setResultContent(
          <div className="results-page">
            <img
              src="../public/hogwarts-sorting-hat.png"
              className="sorting-hat-result"
            />
            <p className="result-text">
              {" "}
              You are a hatstall between {winningHouse()}.
            </p>
          </div>
        );
      } else if (occurrencesOfHighestScore() === 3) {
        setResultContent(
          <div className="results-page">
            <img
              src="../public/hogwarts-sorting-hat.png"
              className="sorting-hat-result"
            />
            <p className="result-text">
              You are a hatstall between {winningHouse()}.
            </p>
          </div>
        );
      }
    }
    setShowResult(true);
  }

  function shuffleArray(arr) {
    const arrCopy = [...arr]; // make copy of arr and assign to arrCopy
    for (let i = arrCopy.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1)); // produces a random integer between 0-->i inclusive
      [arrCopy[i], arrCopy[randomIndex]] = [arrCopy[randomIndex], arrCopy[i]]; // swaps item at index position i with item is randomly generated index
    }
    return arrCopy;
  }

  function highestScore() {
    const largestValue = Math.max(...scoresArray);
    console.log(largestValue);
    return largestValue;
  }

  function isOnlyHighestScore() {
    const largestValue = highestScore();
    const largestValueArray = scoresArray.filter(
      (value) => value === largestValue
    );
    if (largestValueArray.length === 1) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }

  function secondHighestScore() {
    const largestValue = highestScore();
    const scoresArrayWithoutHighest = scoresArray.filter(
      (value) => value !== largestValue
    );
    const secondLargestValue = Math.max(...scoresArrayWithoutHighest);
    console.log(secondLargestValue);
    return secondLargestValue;
  }

  function isOnlySecondHighestScore() {
    const secondLargestValue = secondHighestScore();
    const secondLargestValueArray = scoresArray.filter(
      (value) => value === secondLargestValue
    );
    if (secondLargestValueArray.length === 1) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }

  function occurrencesOfHighestScore() {
    const largestValue = highestScore();
    const largestValueArray = scoresArray.filter(
      (value) => value === largestValue
    );
    return largestValueArray.length;
  }

  function winningHouse() {
    if (isOnlyHighestScore()) {
      if (scoresArray.indexOf(highestScore()) === 0) {
        return "Gryffindor";
      } else if (scoresArray.indexOf(highestScore()) === 1) {
        return "Slytherin";
      } else if (scoresArray.indexOf(highestScore()) === 2) {
        return "Ravenclaw";
      } else {
        return "Hufflepuff";
      }
    } else {
      if (occurrencesOfHighestScore() === 2) {
        const indArr = [];
        let i = -1;
        while ((i = scoresArray.indexOf(highestScore(), i + 1)) !== -1) {
          indArr.push(i);
        }
        return `${fourHouses[indArr[0]]} and ${fourHouses[indArr[1]]}`;
      } else if (occurrencesOfHighestScore() === 3) {
        const indArr = [];
        let i = -1;
        while ((i = scoresArray.indexOf(highestScore(), i + 1)) !== -1) {
          indArr.push(i);
        }
        return `${fourHouses[indArr[0]]}, ${fourHouses[indArr[1]]} and ${
          fourHouses[indArr[2]]
        }`;
      }
    }
  }

  function secondHouse() {
    if (isOnlySecondHighestScore()) {
      const index = scoresArray.indexOf(secondHighestScore());
      return fourHouses[index];
    }
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
        {shuffledAnswers.map((answer) => (
          <AnswerChoice
            onAnswerClick={handleAnswerSelection}
            textContent={answer}
          />
        ))}
        <img src="/parchment.png" className="parchment"></img>
        <h1 className="question-heading">Question {question}</h1>
        <p className="question-text">
          {questionsArray[question - 1].questionText}
        </p>
        <FontAwesomeIcon
          icon={faBackward}
          className="backward-icon"
          onClick={handleBackClick}
        />
      </div>
    );
  } else if (question === 16 && showResult === false) {
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
        <p className="click-for-result" onClick={handleResultClick}>
          Click here to join your house!
        </p>
        <FontAwesomeIcon
          icon={faBackward}
          className="backward-icon-end"
          onClick={handleBackClick}
        />
      </div>
    );
  } else if (question === 16 && showResult === true) {
    pageContent = resultContent;
  }

  return <div className="page">{pageContent}</div>;
}
