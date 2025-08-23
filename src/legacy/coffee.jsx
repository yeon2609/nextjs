"use client"

import { useState } from "react";

// 아메리카노 2000원 추가
  // 라떼 3000원 추가
  // 바닐라 3500원 추가
  // 총 금액 : 0원

const Coffee = () => {
  
  const [total, setTotal] = useState(0)
  const americano = () => {
    setTotal((x) => x + 2000)
  }
  const latte = () => {
    setTotal((x) => x + 3000)
  }
  const vanilla = () => {
    setTotal((x) => x + 3500)
  }

    return<>

    <button onClick={americano}>아메리카노 2000원</button>
    <button onClick={latte}>라떼 3000원</button>
    <button onClick={vanilla}>바닐라 3500원</button>
    <span>총 금액: {total}원</span> 
    
  </> 
  
}
 
export default Coffee;