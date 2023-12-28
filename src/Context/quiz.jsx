import { createContext, useReducer } from "react";
import questions from '../data/questions_complete.js'

// Criou um array com os estagios que eu vou usar para mudar o display da página.
const STAGES = ['Start', 'StartPlaying', 'Playing', 'End'];

// Assim posso determinar o estado inicial da minha aplicação.

const inicialState = {
  gameStage: STAGES[0],
  questions: questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  showTip: false,
  removeBtns: false,
  changeCategory: 0,
  filteredAnswered: 0
}

// Criando o reducer aqui:
// State - estado atual do jogo;
// action - Ação que modifica o estado do jogo;
const quizReducer = (state, action) => {

  switch (action.type) {



    case 'CHANGE_STATE_HTML':
      const htmlData = state.questions[0]
      return {
        ...state, gameStage: STAGES[2], questions: htmlData, changeCategory: state.changeCategory
      }
    case 'CHANGE_STATE_CSS':

      const cssData = state.questions[1]

      return {
        ...state, gameStage: STAGES[2], questions: cssData, changeCategory: state.changeCategory + 1
      }

    case 'CHANGE_STATE_JAVASCRIPT':
      console.log('javascript');
      const javascriptData = state.questions[2]

      return {
        ...state, gameStage: STAGES[2], questions: javascriptData, changeCategory: state.changeCategory + 1
      }

    case 'CHANGE_QUESTION':
      console.log('Change');
      const changeQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (state.currentQuestion === state.questions.questions.length - 1) {
        endGame = true;

      }
      console.log(endGame);

      return {
        ...state, showTip: false, removeBtns: false, currentQuestion: changeQuestion, gameStage: endGame ? STAGES[3] : state.gameStage, answerSelected: false
      }

    case 'NEW_GAME':
      return inicialState;

    case 'CHECK_ANSWER':
      if (state.answerSelected) return state;
      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) correctAnswer = 1;
      return {
        ...state, score: state.score + correctAnswer, answerSelected: option, showTip: false, removeBtns: true

      }
    case 'CHOOSE_LANG':
      return {
        ...state, gameStage: STAGES[1]
      }

    case 'EXCLUIR_UM':

      console.log('excluir um');
      let currentListOptions = state.questions.questions[state.currentQuestion].options;

      if (currentListOptions.answer !== state.answerSelected) {
        currentListOptions.pop();
      } else {
        currentListOptions.shift()
      }
      return {
        ...state, filteredAnswered: currentListOptions, removeBtns: true
      }

    case 'MOSTRAR_DICA':
      console.log('mostrar dica');
      return {
        ...state, showTip: true
      }
    default:
      return state;
  }

}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, inicialState)
  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )

}