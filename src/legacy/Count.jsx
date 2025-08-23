"use client"

import { useState } from "react"; 

const Count = () => {

  const [num, setNum] = useState(0);
  const plus = () => {
    setNum((x) => x + 1)
  }
  const minus = () => {
    setNum((x) => x - 1)
  }

  return<>
   

    <button onClick={plus}>-</button>
    <span style={{color: num >= 10 ? 'blue' : 'black'}}>{num}</span>
    <button onClick={minus}>+</button>
  </> 
  
}
 
export default Count;