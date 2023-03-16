import React from 'react'

export default function SingleQuestion(props) {
  const {question, correctAnswer, incorrectAnswers, type, id } = props.question
  
  return (
    <div className="singleQuestionContainer">
    <h1 className='questionHeader'>{question}</h1>
    <div className='answerContainer'>
        <button className="answerBtn btn">{correctAnswer}</button>
        <button className="answerBtn btn">{incorrectAnswers[0]}</button>
        <button className="answerBtn btn">{incorrectAnswers[1]}</button>
        <button className="answerBtn btn">{incorrectAnswers[2]}</button>
    </div>
</div>
  )
}
