import React,  {useState} from 'react'
import Cell from './Cell'

export default function Board({cell}) {

                                            
  const [board , setBoard] = useState(["","","","","",
                                      "","","","","",
                                      "","","","","",
                                      "","","","","",
                                      "","","","","",
                                      "","","","",""]);
  return (
    <div className='board' >
    {board.map((cell)=>(
      <Cell 
      key={cell.id}
      />
    ))
}  
   </div>
  )
}
