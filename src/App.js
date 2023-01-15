import './App.scss';
import { useState } from 'react'
import Board from './Board';
import { Keyboard } from './Keyboard';
import {MyNavbar} from './MyNavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [keyVal, setKeyVal] = useState(); 
  const [cell, setCell] = useState(""); 

  return (
    <>
      <MyNavbar/>
        <Board cell={cell}/>
        <Keyboard keyVal={keyVal}/>
    </>
     


  );
}

export default App;
