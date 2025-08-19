"use client"

import { useState } from "react";
import { Heart } from 'lucide-react';

// 1. counter - 0 + 5이상 green, -5이하 red, 나머지 black
// 2. 하트 누르면 꽉찬거 다시누르면 빈하트 만들기

const Page = () => {

  const [num, setNum] = useState(0);
  const plus = () => {
    setNum((x) => x + 1)
  }
  const minus = () => {
    setNum((x) => x - 1)
  }

  const [fill, setfill] = useState(false)

  return <>
    <button onClick={minus}>-</button>
    <span style={{color: num >= 5 ? 'green' : num <= -5 ? 'red' : 'black'}}>{num}</span>
    <button onClick={plus}>+</button>

    <Heart fill={fill ? 'red' : 'white'} onClick={() => setfill((x) => !x)}/>

  </>
  
}
 
export default Page;