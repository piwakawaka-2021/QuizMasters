import React, {useState} from 'react'

const Card7 = ({onCorrect, questions}) => {

  let singleQuestion = questions.questionText
 
  let answers = questions.answerOptions

  const [card, setCard] = useState(singleQuestion)

  function cardClick()  {


    setCard(answers.map((answer, i) => {
     
      return (
        <ul>
          <li id={i} onDoubleClick={(evt) => answerClick(evt)}>
            {answer.answerText}
          </li>
        </ul>

      )
    }))

  }

  function answerClick(evt) {

    if (answers[evt.target.id].isCorrect) {
      onCorrect()
    }

    // let answerTarget = Object.keys(evt.key)
    console.log(answers[evt.target.id].isCorrect)
    
    setCard(JSON.stringify(answers[evt.target.id].isCorrect))
   
  }

  function question (evt) {
    evt.preventDefault()
    setCard(singleQuestion)
  }




  return (
    <div onContextMenu={(evt) => question(evt) } onClick={() => cardClick()} className="card">
      
      <h1>{card}</h1>

    </div>
  )
}
export default Card7
