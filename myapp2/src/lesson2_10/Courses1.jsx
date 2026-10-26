//parent to child communication
function Course1(props) {
    return ( 
        <>
            <h2>Child comp</h2>
            <h2>Course Name: {props.name}</h2>;
            <p>Course desc:{props.desc}</p>

        </>
)}

function Courses1() {
    return (
        <div>
            <h1>Course Portal</h1>
            <Course1 name="React Development" desc="this is term3 course"/>
            <Course1 name="ASP.NET web dev"  desc="this is pd course"/>
        </div>
    );
}

export default Courses1;