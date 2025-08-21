"use client"

import { useState } from "react";



const Page = () => {

  // 1. - 0 + 구현하기
  const [num, setNum] = useState(0);

  // 2. 이모지 누르면 😎<->😴
  const [icon, setIcon] = useState(true)

  return (<>
  
    <button onClick={() => setNum((x) => x - 1)}>-</button>
    <span>{num}</span>
    <button onClick={() => setNum((x) => x + 1)}>+</button>

    <button onClick={() => setIcon((x) => !x)}>{icon ? '😎' : '😴'}</button>
  </>   
   );
}
 
export default Page;