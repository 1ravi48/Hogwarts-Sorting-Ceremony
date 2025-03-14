import "./AnswerChoice.css";

export default function AnswerChoice({ onAnswerClick, textContent }) {
  function handleAnswerClick(event) {
    onAnswerClick(event);
  }

  return (
    <div className="answer-choice-div" onClick={handleAnswerClick}>
      <p className="answer-choice-text">{textContent}</p>
    </div>
  );
}
