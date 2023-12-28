import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../../Context/quiz';

import './Options.css'
const Options = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div onClick={() => selectOption()} className={`option 
    ${quizState.answerSelected && option === answer ? "correct" : ""} 
    ${quizState.answerSelected && option !== answer ? "wrong" : ""}`}>{option}
    </div>

  )
}

export default Options
