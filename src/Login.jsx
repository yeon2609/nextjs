"use client"

import { useState } from "react";

import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);
  const abc = () => {
    setIsOpen((x) => !x)
  }

  return<>
    <div className="flex gap-2">
      <input className="border-2 border-black" type={isOpen ? 'text' : 'password'} />
      <div onClick={abc}>{isOpen ? <Eye /> : <EyeOff />}</div>
    </div>
  </> 
}
 
export default Login;