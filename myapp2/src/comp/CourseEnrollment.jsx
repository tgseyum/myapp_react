import { useState } from "react";

function CourseEnrollment() {

const [enrolled, setEnrolled] = useState(false);

function handleEnrollment() {

    setEnrolled(true);

}

return (
    <div>

        <h2>React Web Development</h2>

        {enrolled ? (
            <p>You are enrolled in this course.</p>
        ) : (
            <p>You are not enrolled yet.</p>
        )}

        <button onClick={handleEnrollment}>
            Enroll Now
        </button>

    </div>
);


}

export default CourseEnrollment;