export default class Question {
  constructor({ question, correct_answer, incorrect_answers }) {
    this.question = question
    this.correctAnswer = correct_answer
    this.incorrectAnswers = incorrect_answers
  }

  get Template() {
    return `
    <h1 class="text-dark text-strong">${this.question}</h1>
    <li><span class="text-success">${this.correctAnswer}</span>, ${this.incorrectAnswers}</li>
    `
  }
}