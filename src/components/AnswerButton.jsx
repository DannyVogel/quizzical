import React from 'react'

export default function AnswerButton(props) {
  let color = ''
  
  if(props.gameEnd){
    if(props.answer == props.correctAnswer){
      color = '#94D7A2'
    } else if (props.isSelected != props.correctAnswer && props.isSelected == props.answer){
      color = '#F8BCBC'
    }
  } else if (props.isSelected == props.answer){
    color = '#D6DBF5'
  }
  
  const styles = {
    // order: `${order}`,
    backgroundColor: color
  }
  
  return (
    <button style={styles} className="answerBtn btn" onClick={!props.gameEnd && props.handleClick}>{props.answer}</button>
  )
}
