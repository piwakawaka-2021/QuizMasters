import React, {useState} from 'react'

import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'
import Card6 from './Card6'
import Card7 from './Card7'
import Card8 from './Card8'
import Card9 from './Card9'

import questions from '../../data/questions'

function Board () {

  let questionData = Object.values(questions)
  const [counter, setCounter] = useState(0)
 
  // setCounter(() => {
  //   if (card) {
  //     counter += 1;
  //   }
  // })

  const doAThing = () => {
    setCounter(counter + 1)
  }


  return (
    <div className="wrapper">
    <div className="game_board">

     <Card onCorrect={doAThing}  questions={questionData[0][0]}/>
     <Card2 onCorrect={doAThing}  questions={questionData[0][1]}/>
     <Card3 onCorrect={doAThing}  questions={questionData[0][2]}/>
     <Card4 onCorrect={doAThing}  questions={questionData[0][3]}/>
     <Card5 onCorrect={doAThing}  questions={questionData[0][4]}/>
     <Card6 onCorrect={doAThing}  questions={questionData[0][5]}/>
     <Card7 onCorrect={doAThing}  questions={questionData[0][6]}/>
     <Card8 onCorrect={doAThing}  questions={questionData[0][7]}/>
     <Card9 onCorrect={doAThing} questions={questionData[0][8]}/>
    </div>
    <h2>Score={counter}</h2>
    </div>
  )
}

export default Board
