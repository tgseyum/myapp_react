import { useState } from "react";

function StudentStatus() {

const [isEnrolled, setIsEnrolled] = useState(false);

return (
    <div>

        <h2>Student Status</h2>
        {isEnrolled ? (
            <p>The student is enrolled.</p>
        ) : (
            <p>The student is not enrolled.</p>
        )}

        <button onClick={() => setIsEnrolled(!isEnrolled)} >
            {isEnrolled ? "Unenroll" : "Enroll"}
        </button>
        <button>send</button>
    </div>
);


}

export default StudentStatus;