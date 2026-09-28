

//Uncontrolled example
import { useRef } from "react";

function Contact() {

const nameInput = useRef(); 

const showName = () => {
    alert(nameInput.current.value);
    console.log(nameInput.current.value)
};

return (
    <div>

        <h2>Name Form</h2>

        <input
            type="text"
            ref={nameInput}
            placeholder="Enter your name"
        />

        <button onClick={showName}>
            Show Name
        </button>

    </div>
);


}

export default Contact