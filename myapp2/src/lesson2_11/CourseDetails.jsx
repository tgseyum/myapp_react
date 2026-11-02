// Step 3: Create a component that uses Context
import { useContext } from "react";
import {CourseContext} from "./CourseContext";

function CourseDetails() {
    const course = useContext(CourseContext);

    return (
        <div>
            <h3>Course Details</h3>
            <p>Course Name: {course.courseName}</p>
        </div>
    );
}

export default CourseDetails