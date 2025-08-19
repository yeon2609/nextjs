"use client"

import { useState } from "react";

import { Heart } from 'lucide-react';

const Like = () => {

  const [num, setNum] = useState(0)
  const up = () => {
    setNum((x) => x + 1)
  }

  return<>
 <div onClick={up} className="flex flex-col items-center">
  <Heart fill={num > 0 ? 'red' : 'white'} color={num > 0 ? 'red' : 'black'} />
  <span>{num}</span>
 </div>
  </> 
  
}
 
export default Like;