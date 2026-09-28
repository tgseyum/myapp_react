import { useState } from "react"
function Student(){
  const [student, setStudent] = useState([{id:1, name:"David", dept:"SD", course:"Web"}])
  console.log(student)
  const newStudent = {id:2, name:"Thom", dept:"IT", course:"Maths"}
  const  course="web prgramming"
  return(
    <>
       <h2>Student Info</h2>
       <p>id : {student[0].id}</p>
       <p>name : {student[0].name}</p>
       <p>dept : {student[0].dept}</p>
       <p>course :{student[0].course}</p>

       <p>
        {student.map((s)=>(
          <div key={s.id}>
             <p>id:{s.id}</p>
             <p>id :{s.name}</p>
             <p>id :{s.dept}</p>
             <p>id :{s.course}</p>
          </div>
        ))}
       </p>

      <button type="button" onClick={()=>{setStudent([...student, newStudent])}}>Add new student</button>
    </>
  )
}

export default Student;