import { decode } from 'he'
import { v4 as uuidv4 } from 'uuid'

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

class Quiz {
    constructor(data){
        this.id = uuidv4()
        this.question = decode(data.question)
        this.incorrectAnswers = data.incorrect_answers.map(answer => decode(answer))
        this.correctAnswer = decode(data.correct_answer)
        this.allAnswers = shuffle(this.incorrectAnswers.concat(this.correctAnswer))
        this.selectedAnswer = ''
    }
}

export default Quiz