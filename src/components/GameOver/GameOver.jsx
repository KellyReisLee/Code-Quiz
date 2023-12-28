import React from 'react'
import './GameOver.css'
import welldone from '../../img/welldone.svg'
import { useContext } from 'react'
import { QuizContext } from '../../Context/quiz';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id='gameover'>
      <h2>Game Over</h2>

      <p>Você acertou {quizState.score} de {quizState.questions.questions.length} perguntas.</p>
      <img src={welldone} alt='Fim do Quiz' />
      <p>Pontuação: {quizState.score}</p>
      <button onClick={() => dispatch({ type: 'NEW_GAME' })}>Reiniciar</button>
    </div>
  )
}

export default GameOver
