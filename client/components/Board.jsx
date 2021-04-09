import React from 'react'

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

 
  return (
    <div className="wrapper">
    <div className="game_board">

     <Card props={questionData[0][0]}/>
     <Card2 props={questionData[0][1]}/>
     <Card3 props={questionData[0][2]}/>
     <Card4 props={questionData[0][3]}/>
     <Card5 props={questionData[0][4]}/>
     <Card6 props={questionData[0][5]}/>
     <Card7 props={questionData[0][6]}/>
     <Card8 props={questionData[0][7]}/>
     <Card9 props={questionData[0][8]}/>
    </div>
    </div>
  )
}

export default Board
