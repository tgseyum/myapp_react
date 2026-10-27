import { useState } from "react";

function CourseList5() {
    const [selectedCourse, setSelectedCourse] = useState("");
    return (
        <div>
            <h2>Course List</h2>
            <button onClick={() => setSelectedCourse("React Development")}>Select React</button>
            <p>Selected Course in CourseList: {selectedCourse || "None"}</p>
        </div>
    );
}

function CourseDetails5() {
    return <p>CourseDetails cannot access CourseList's local state.</p>;
}

function Courses5() {
    return (
        <div>
            <h1>Course Portal example5</h1>
            <CourseList5 />
            <CourseDetails5 />
        </div>
    );
}

export default Courses5;