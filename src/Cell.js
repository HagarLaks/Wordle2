import React from 'react'
import {useState} from 'react'

export default function Cell({board,setboard}) {
  const [correctness, setCorrectness] = useState("active");
  const [isInWord, setIsInWord ] = useState()

  return (
    <input className={`cell ${correctness}`}   >

    </input>
  )
}
