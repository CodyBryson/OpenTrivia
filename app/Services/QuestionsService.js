import { ProxyState } from '../AppState.js';
import Question from "../Models/Question.js";
import { api } from "./AxiosService.js";

class QuestionsService {
  async getQuestion(url) {
    let res = await api.get(url)
    ProxyState.questions = res.data.results.map(q => new Question(q))

  }
}
export const questionsService = new QuestionsService();