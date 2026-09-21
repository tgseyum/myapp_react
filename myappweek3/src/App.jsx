import { useState } from "react"
import { Course } from "./components/Course"
import Student from "./components/Students"
function App() { 
  const [name, setName]=useState("Selam")
  const changname = function(){
    setName("Thomas")
  }
  const changname2 = ()=>{
    setName("Sara")
  }
   return (
    <>
        <h1 id="title" className="title">My react web page</h1>
        {/* <Student name="Aron" dept="SD"> 
           <p>This is first student</p>
           <Course cname="React"/>
        </Student> */}
        <h1>Another title</h1>
        <Student name="TG"/>
        <Student />
        <p>{name}</p>
        <button onClick={changname}>change name</button>
        <button onClick={changname2}>change name2</button>
        <button onClick={()=>{setName("Solomon")}}>change name3</button>

    </>
  )
}

export default App



