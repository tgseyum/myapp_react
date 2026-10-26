function Course2(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Instructor: {props.instructor}</p>
            <p>Duration: {props.duration}</p>
        </div>
    );
}

function Courses2() {
    return (
        <div>
            <h1>Course Portal</h1>
            <Course2 name="React Development" instructor="Sarah" duration="15 weeks" />
        </div>
    );
}

export default Courses2;