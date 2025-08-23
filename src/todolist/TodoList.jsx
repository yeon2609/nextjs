"use client"

import { useState } from "react";
import Register from "@/src/todolist/Register";
import List from "@/src/todolist/List";

const TodoList = (props) => {

  const[inputData, setInputData] = useState('');
  const[check, setCheck] = useState([])

  return ( 
    <>
    <Register 
    change={(e) => setInputData((prev) => e.target.value)}
    click={() => setCheck((prev) => [...prev, inputData])}/>
    <List name={props.name} check={check} click={() => setCheck((prev) => [...prev].filter((x, y) => i != y))}/> 
    </>
   );
}
 
export default TodoList;