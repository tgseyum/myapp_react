import { useState } from "react";

function CourseList6(props) {
    return <button onClick={() => props.onCourseSelect("React Development")}>Select React</button>;
}

function CourseDetails6(props) {
    return <p>Current Course: {props.course || "No course selected"}</p>;
}

function Courses6() {
    const [selectedCourse, setSelectedCourse] = useState("");
    
    const handleCourseSelect = (course) => { setSelectedCourse(course); };

    return (
        <div>
            <h1>Course Portal example6</h1>
            <CourseList6 onCourseSelect={handleCourseSelect} />
            <CourseDetails6 course={selectedCourse} />
        </div>
    );
}

export default Courses6;