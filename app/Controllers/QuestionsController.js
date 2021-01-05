import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";

function _drawQuestions() {
  let template = ''
  const questions = ProxyState.questions
  questions.forEach(q => template += q.Template)
  document.getElementById('question').innerHTML = template
}

export default class QuestionsController {
  constructor() {
    ProxyState.on('questions', _drawQuestions)

    questionsService.getQuestion('');
  }
}