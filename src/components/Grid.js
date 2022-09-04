import React from 'react'
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn }) {
  return (
    <div>
      {guesses.map((g, i) => {   //g value is for each individual guess
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />
        }
        return <Row key={i} guess={g} />
      })}
    </div>
  )
}
