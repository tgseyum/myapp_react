import { useState } from "react";

function CourseList4(props) {
    return <button onClick={() => props.onCourseSelect("React Development")}>Select React</button>;
}

function Courses4() {
    const [selectedCourse, setSelectedCourse] = useState("");

    //cf to pass as props to child comp
    const handleCourseSelect = (course) => { setSelectedCourse(course); };

    return (
        <div>
            <h1>Course Portal</h1>
            <CourseList4 onCourseSelect={handleCourseSelect} />

            <p>Selected Course: {selectedCourse || "None"}</p>
        </div>
    );
}

export default Courses4;