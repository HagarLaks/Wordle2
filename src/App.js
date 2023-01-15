import './App.scss';
import { useState } from 'react'
import Board from './Board';
import { Keyboard } from './Keyboard';

function App() {
  const [keyVal, setKeyVal] = useState(); 
  const [cell, setCell] = useState(""); 

  return (
    <>
        <Board cell={cell}/>
        <Keyboard keyVal={keyVal}/>
    </>
     


  );
}

export default App;
