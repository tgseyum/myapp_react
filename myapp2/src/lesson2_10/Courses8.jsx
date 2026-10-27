import { useState } from "react";

function CourseList8(props) {
    return <button onClick={() => props.onCourseSelect("React Development")}>Select React</button>;
}
function CourseDetails8(props) {
    return (
        <div>
            <h2>Course Details</h2>
            <p>Current Course: {props.course || "None"}</p>
            <button onClick={() => props.onCourseMessage("Course details requested!")}>Request Course Details</button>
        </div>
    );
}
function Courses8() {
    const [selectedCourse, setSelectedCourse] = useState("");
    const [courseMessage, setCourseMessage] = useState("");

    const handleCourseSelect = (course) => { setSelectedCourse(course); };
    const handleCourseMessage = (message) => { setCourseMessage(message); };

    return (
        <div>
            <h1>Course Portal example 8</h1>
            <CourseList8 onCourseSelect={handleCourseSelect} />

            <CourseDetails8 course={selectedCourse} onCourseMessage={handleCourseMessage} />

            <p>Selected Course: {selectedCourse || "None"}</p>
            <p>Message from CourseDetails: {courseMessage || "No message yet"}</p>
        </div>
    );
}

export default Courses8;