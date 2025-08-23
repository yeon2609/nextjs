"use client"

import { useState } from "react";

const [inputData, setInputData] = useState('')
const [check, setCheck] = useState('')

const Todo = () => {
  return ( <>
    <div>
      <input onChange={(e) => setInputData((prev) => e.target.value)} className="border-2 border-red-100" type="text" />
      <button onClick={() => setCheck((prev) => inputData)} className="bg-sky-100 p-1">입력</button>
    </div>
    <div className="flex flex-col">
      <span>오늘 할일</span>
      <span>{check}</span>
    </div>

  </>
   );
}
 
export default Todo;