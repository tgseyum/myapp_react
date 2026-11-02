// Step 4: Create another component
import CourseDetails from "./CourseDetails";
import CourseInstructor from "./CourseInstructor";

function CoursePage() {
    return (
        <div>
            <h2>Course Page</h2>
            <CourseDetails />
            <CourseInstructor />
        </div>
    );
}
export default CoursePage