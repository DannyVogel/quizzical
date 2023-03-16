import React, { useState, useEffect } from "react";
import AnswerButton from "./AnswerButton";

export default function SingleQuestion(props) {
  const [selected, setSelected] = useState()
  const { question, correctAnswer, allAnswers, id} = props.question;

  function handleAnswerClick(event) {
    let selectedAnswer = event.target.innerText;
    setSelected(selectedAnswer);
  }

  useEffect(() => {
    props.updateSelectedAnswer(id, selected)
  },[selected])

  const answerButtonEls = allAnswers.map((answer, index) => {
    return (
      <AnswerButton
        key={index}
        answer={answer}
        correctAnswer={correctAnswer}
        isSelected={selected}
        handleClick={handleAnswerClick}
        gameEnd={props.gameEnd}
      />
    );
  });

  return (
    <div className="singleQuestionContainer">
      <h1 className="questionHeader">{question}</h1>
      <div className="answerContainer">
        {answerButtonEls}
      </div>
    </div>
  );
}
