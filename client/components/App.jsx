import React from 'react'

import Board from './Board'

function App () {
  return (
    <>
      <div className='title'>

        <h1>Ridiculous questions and ridiculous answers</h1>
        <h2>Quiz Board</h2>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className='main'>
        <Board/>
      </div>
    </>
  )
}

export default App
