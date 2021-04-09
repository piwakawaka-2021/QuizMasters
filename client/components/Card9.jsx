import React, {useState} from 'react'

const Card9 = (props) => {
  let questionText = Object.values(props)
  let singleQuestion = questionText[0].questionText

  let answers = questionText[0].answerOptions
  console.log(answers)

  const [card, setCard] = useState(singleQuestion)
  function cardClick()  {
    setCard(answers.map(answer => {
      return (
        <ul>
          <li>
            {answer.answerText}
          </li>
        </ul>

      )
    }))

  }


  return (
    <div onClick={() => cardClick()} className="card">
      
      <h1>{card}</h1>
    </div>
  )
}


export default Card9
