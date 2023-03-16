import React from 'react'
import { useState, useEffect } from 'react'
import SingleQuestion from './SingleQuestion'
import Quiz from '../class'

export default function QuestionsPage(props) {
  const [fiveQuestions, setFiveQuestions] = useState([])
  const [gameEnd, setGameEnd] = useState(false)
  const [result, setResult] = useState(0)
  
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(data => {
        setFiveQuestions(data.results.map(quiz => new Quiz(quiz)))
      })
  },[])

  function updateSelectedAnswer(id, answer){
    setFiveQuestions(prevFive =>{
      return prevFive.map(question => {
        return question.id == id ? {...question, selectedAnswer: answer} : question
      })
    })
  }

  function checkAnswers(){
    const correctlyAnswered = fiveQuestions.filter(question => question.selectedAnswer === question.correctAnswer)
    const numberCorrect = correctlyAnswered.length
    setResult(numberCorrect)
    setGameEnd(true)
  }

  const singleQuestionElements = fiveQuestions.map(question => {
    return <SingleQuestion 
      key={question.id}
      question={question}
      updateSelectedAnswer={updateSelectedAnswer}
      gameEnd={gameEnd}
    />
  })

  console.log(fiveQuestions)

  return (
    <div className='allQuestionsContainer'>
      {singleQuestionElements}

      <div className="btnContainer">
        {!gameEnd && <button className='questionPageBtn btn' onClick={checkAnswers}>Check Answers</button>}
        {gameEnd &&
          <div className="resultsContainer">
            <p className='resultsTxt'>You scored {result}/5 correct answers</p>
            <button className='questionPageBtn btn' onClick={props.startOver}>Play again</button>
          </div>}
      </div>
    </div>
  )
}
