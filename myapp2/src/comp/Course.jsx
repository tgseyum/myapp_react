function Course() {
    const courses = [
    "React",
    "JavaScript",
    "Node.js"
];
    return (
        <>
            <h1>List of courses</h1>
            <p>
                {courses.map((course, index)=>{
                    return <li key={index}>{course}</li>
                })}
            </p>
        </>

    )
}
export default Course