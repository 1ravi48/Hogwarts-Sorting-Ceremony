import "./AnswerChoice.css";

export default function AnswerChoice({ onAnswerClick }) {
  function handleAnswerClick() {
    onAnswerClick();
  }

  return (
    <div className="answer-choice-div" onClick={handleAnswerClick}>
      <p className="answer-choice-text">Answer choice</p>
    </div>
  );
}
