"use client"

import { useState } from "react";

const Calc = () => {

  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [sum, setSum] = useState(0)

  return ( 
    <div className="flex flex-col">
      <input onChange={(e) => setFirst((prev) => +e.target.value)} className="border-2 border-black" type="text" />
      <button onClick={() => setSum((prev) => first + second)}>+</button>
      <input onChange={(e) => setSecond((prev) => +e.target.value)} className="border-2 border-black" type="text" />
      <span>합계 : {sum}</span>
    </div>
   );
}
 
export default Calc;