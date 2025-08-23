"use client"
import Goods from "@/src/Goods";
import { useEffect, useState } from "react";

const Page = () => {

  const[menu, setMenu] = useState([])

  // side effect : 데이터 가져오기, 위치 알려주기
  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((v) => setMenu((prev) => [...v.recipes]));
  }, []);


  return <div className="grid grid-cols-4">
    {menu.map((v, i) => (
      <Goods key={i} image={v.image} name={v.name} rating={v.rating}/>
    ))}
  </div>;
}
 
export default Page;