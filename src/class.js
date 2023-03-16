import { decode } from 'he'
import { v4 as uuidv4 } from 'uuid'

class Quiz {
    constructor(data){
        this.id = uuidv4()
        this.question = decode(data.question)
        this.incorrectAnswers = data.incorrect_answers.map(answer => decode(answer))
        this.correctAnswer = decode(data.correct_answer)
        this.allAnswers = this.incorrectAnswers.concat(this.correctAnswer)
        this.selectedAnswer = ''
    }
}

export default Quiz