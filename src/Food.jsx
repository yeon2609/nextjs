"use client"

import { useState } from "react";

const Food = () => {

  const [food, setFood] = useState('');
  const [check, setCheck] = useState(false)

  return ( 
    <div>
      <input onChange={(e) => {
        setFood((prev) => e.target.value);
        setCheck((prev) => false);
        }} className="border-2 border-black" type="text" />
      <button onClick={() => setCheck((prev) => true)} className="bg-sky-100 p-1">입력</button>
      <div>내가 먹고싶은 음식 : {check && food}</div>
    </div>
   );
}
 
export default Food;