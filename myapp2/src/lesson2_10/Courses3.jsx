import { useState } from "react";

//child to parent
function MessageButton3(props) {
    return(
        < div style={{backgroundColor:"red"}}>
            <div>
                <h2>Child component 3</h2>
                <button onClick={() => props.onSendMessage("Hello from the child!")}>Send Message</button>;
            </div>
            

        </div>
    )    
}

function Child(props){

    return(
        <div style={{backgroundColor:"gray"}}>
            <div style={{backgroundColor:"green"}} >
                <p>{props.name}</p>
                 {/* {props.getmessage("Hello my parent")} */}
            <button onClick={()=>{props.getmessage("Hello my parents")}}>Greeting</button>

            </div>
            
        </div>
    )
}
function Courses3() {
    const[message, setMessage]=useState("")
    const[greeting, setGreeting]=useState("")
    const handleMessage = (message) => { setMessage(message); };
    const handlegreeting = (greeting)=>{setGreeting(greeting)}

    return (
        <div style={{backgroundColor:"orange"}}>
            <h1>Course Portal 3</h1>
            <MessageButton3 onSendMessage={handleMessage}  />
            <p>{message}</p>
            <Child  name="I am your child" getmessage={handlegreeting} />
            <div>child message{greeting}</div>
            
        </div>
    );
}

export default Courses3;