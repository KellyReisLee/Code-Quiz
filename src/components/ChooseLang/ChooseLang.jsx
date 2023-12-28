import React from 'react'
import categoria from '../../img/category.svg'

import './ChooseLang.css'
import { useContext } from 'react'
import { QuizContext } from '../../Context/quiz';

const ChooseLang = () => {
  const [quizState, dispatch] = useContext(QuizContext);




  return (
    <div id='choose-lang'>

      <h3>Escolha a categoria</h3>
      <p>As perguntas serão referentes a uma das linguagens abaixo.</p>
      <div id='container-btn'>
        <button onClick={() => dispatch({ type: 'CHANGE_STATE_HTML' })}>HTML</button>
        <button onClick={() => dispatch({ type: 'CHANGE_STATE_CSS' })}>CSS</button>
        <button onClick={() => dispatch({ type: 'CHANGE_STATE_JAVASCRIPT' })}>Javascript</button>
      </div>
      <div className='container-img'>
        <img src={categoria} alt='selecione categoria' />
      </div>

    </div>
  )
}

export default ChooseLang
