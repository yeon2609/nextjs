"use client"

const Page = () => {

  const test = () => {
    alert("다까먹음 ㅎㅎ")
  }

  const test1 = () => {
    console.log("수업 언제끝남?")
  }

  return<>
    <button onClick={test}>0</button>
    <button onClick={test1}>on</button>
  </> 
  
}
 
export default Page;