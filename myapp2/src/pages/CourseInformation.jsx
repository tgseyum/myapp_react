import CourseCard from "./CourseCard";

function CourseInformation() {
    const courses = [
    "React",
    "JavaScript",
    "Node.js"
];
    return (
        <>
            <h1>List of courses</h1>
            <CourseCard />
            <p>
                {courses.map((course, index)=>
                     <li key={index}>{course}</li>
                )}
            </p>
        </>

    )
}
export default CourseInformation