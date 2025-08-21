"use client"

import { useState } from "react";
import { Trash } from 'lucide-react';

const Page = () => {

  const [inputData, setInputData] = useState('')
  const [check, setCheck] = useState([''])
  
  return <>
    <div>
      <input onChange={(e) => setInputData((prev) => e.target.value)} className="border-2 border-red-100" type="text" />
      <button onClick={() => setCheck((prev) => [...prev, inputData])} className="bg-sky-100 p-1">입력</button>
    </div>
    <div className="flex flex-col">
      <span>오늘 할일</span>
      {check.map((v, i) => (
        <div className="flex gap-2" key={i}>
          <span className="text-sky-300" >{v}</span>
          <Trash onClick={() => setCheck((prev) => [...prev].filter((x) => x != v))}/>
        </div>
      ))}
    </div>
    
  </>
  
}
 
export default Page;