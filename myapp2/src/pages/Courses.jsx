import { Link, Outlet } from "react-router"
import CourseCard from "./CourseCard"

function Courses(){
    return(
        <>
        <h1>Courses page</h1>
        <div>
            <Link to="courseinfo">CourseInfo</Link>
            {"|"}
            <Link to="coursedetail">Course Detail</Link>
        </div>
        <hr />
        <Outlet />
        <CourseCard />
        
          <CourseCard />
          
        </>
    )
}
export default Courses