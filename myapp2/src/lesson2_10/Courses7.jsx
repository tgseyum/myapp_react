import { useState } from "react";

function CourseList7(props) {
    const [course, setCourse] = useState("");

    const handleClick = () => {
        setCourse("React Development");
        props.onCourseSelect("React Development");
    };

    return (
        <div>
            <button onClick={handleClick}>Select React</button>
            <p>CourseList local state: {course || "None"}</p>
        </div>
    );
}

function CourseDetails7(props) {
    const [courseMessage, setCourseMessage] = useState("");
    return (
        <div>
            <h2>Course Details</h2>
            <p>Current Course: {props.course || "None"}</p>
            <button onClick={() => setCourseMessage("Course details requested!")}>Request Course Details</button>
            <p>Message: {courseMessage || "No message yet"}</p>
        </div>
    );
}

function Courses7() {
    const [selectedCourse, setSelectedCourse] = useState("");

    const handleCourseSelect = (course) => { setSelectedCourse(course); };

    return (
        <div>
            <h1>Course Portal example 7</h1>
            <CourseList7 onCourseSelect={handleCourseSelect} />

            <CourseDetails7 course={selectedCourse} />
        </div>
    );
}

export default Courses7;