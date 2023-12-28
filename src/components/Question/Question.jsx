import React from 'react'
import './Question.css'
import { useContext } from 'react'
import { QuizContext } from '../../Context/quiz';
import Options from '../Options/Options';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions.questions[quizState.currentQuestion];

  function onSelectOption(option) {
    // Usa o 'dispatch' juntament com o 'payload' para passar dados para o reducer através de uma função.
    // Aqui ele passa 'currentQuestion.answer' é a resposta certa e 'option' é a resposta clicada pelo .
    dispatch({
      type: 'CHECK_ANSWER',
      payload: {
        answer: currentQuestion.answer, option
      }
    })
  }



  return (
    <div id='question'>
      <h1>{quizState.questions.category}</h1>
      <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id='options-container'>

        {currentQuestion.options.map((option) => (

          <Options
            selectOption={() => onSelectOption(option)}
            answer={currentQuestion.answer}
            key={option} option={option} />
        ))}
      </div>

      {!quizState.showTip && !quizState.removeBtns && (
        <button onClick={() => dispatch({
          type: 'EXCLUIR_UM'
        })}>Excluir um</button>
      )}

      {quizState.showTip && quizState.questions.questions[quizState.currentQuestion].tip ? (
        <p>{quizState.questions.questions[quizState.currentQuestion].tip}</p>
      ) : (
        !quizState.removeBtns && quizState.questions.questions[quizState.currentQuestion].tip ? <button onClick={() => dispatch({ type: 'MOSTRAR_DICA' })}>Tip</button> : ''
      )

      }
      {
        quizState.answerSelected && (
          <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>Continuar</button>
        )
      }

    </div>
  )
}

export default Question
