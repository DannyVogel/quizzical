import React from 'react'
import { useState, useEffect } from 'react'
import SingleQuestion from './SingleQuestion'
import Quiz from '../class'

export default function QuestionsPage() {
  const [fiveQuestions, setFiveQuestions] = useState([])
  
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then(res => res.json())
      .then(data => {
        setFiveQuestions(data.results.map(quiz => new Quiz(quiz)))
      })
  },[])

  const questionElements = fiveQuestions.map(question => {
    return <SingleQuestion 
      key={question.id}
      question={question}
    />
  })

  return (
    <div className='allQuestionsContainer'>
      {questionElements}
      
      <button className='questionPageBtn btn'>Check Answers</button>
    </div>
  )
}
