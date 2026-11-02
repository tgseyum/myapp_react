 import { CourseContext } from "./CourseContext"
 import { useContext } from "react"
function CourseInstructor(){
   const instrName = useContext(CourseContext)
    return(
    <>
        <h2>Instructor Detail</h2>
        <p>Instructor Name :{instrName.instructorName}</p>
    </>
    )
}
export default CourseInstructor