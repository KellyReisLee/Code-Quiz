
import './App.css'
import Welcome from './components/Welcome/Welcome'
import { useContext } from 'react'
import Question from '../src/components/Question/Question'
import { QuizContext } from './Context/quiz'
import GameOver from './components/GameOver/GameOver'
import ChooseLang from './components/ChooseLang/ChooseLang'

function App() {

  const [quizState, dispatch] = useContext(QuizContext);



  return (
    <>
      <div className='App'>
        <h1>Quiz Programação</h1>

        {quizState.gameStage === 'Start' && <Welcome />}
        {quizState.gameStage === 'StartPlaying' && <ChooseLang />}
        {quizState.gameStage === 'Playing' && <Question />}
        {quizState.gameStage === 'End' && <GameOver />}
      </div>

    </>
  )
}

export default App
