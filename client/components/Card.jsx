import React, {useState} from 'react'
import {link} from 'react'



const Card = (props) => {
  let questionText = Object.values(props)
  let singleQuestion = questionText[0].questionText
 
  let answers = questionText[0].answerOptions
  console.log(answers)

  const [card, setCard] = useState(singleQuestion)


  function cardClick()  {
    setCard(answers.map(answer => {
      return (
        <ul>
          <li onClick={() => answerClick()}>
            {answer.answerText}
          </li>
        </ul>

      )
    }))

  }

  function answerClick() {
    setCard("hello")
  }


  return (
    <div onClick={() => cardClick()} className="card">
      
      <h1>{card}</h1>
    </div>
  )
}


 
export default Card
