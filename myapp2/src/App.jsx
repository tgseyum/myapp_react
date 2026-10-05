
import React, { useState }  from "react"
import Student from "./components/Student";
import Profile from "./components/Profile";
import Contact from "./components/Contact"
import ProductCard from "./components/ProductCard";
import Contact4 from "./components/Contact4";
function App() {
  const [name, setName]=useState("Alex");

  const handlechangename = function(){
    setName("Saron")
  }

   return (
    <>
       {/* <h1>useState hook leesson</h1>
       <p>{name}</p>
       <button onClick={()=>setName("Aron")}>Change name</button>
       <button onClick={handlechangename}>Change name again</button>
       <Student /> */}
       {/* <Profile />
       <Contact />
       <ProductCard name="Phone" price={100} category="Mobile"/>
       <ProductCard name="laptop" price={1200} category="Computer"/>
       <ProductCard name="ipad" price="500" category="Mobile" /> */}
       <Contact4 />
    </>
  )
}

export default App

// function Student(){
//   const [student, setStudent] = useState({id:1, name:"David", dept:"SD"})
//   console.log(student)
//   const  course="web prgramming"
//   return(
//     <>
//        <h2>Student Info</h2>
//        <p>id : {student.id}</p>
//        <p>name : {student.name}</p>
//        <p>dept : {student.dept}</p>
//        <p>course :{student.course}</p>
//        <button type="button" onClick={()=>{setStudent({...student, course:course})}}>Add course</button>
//     </>
//   )
// }

