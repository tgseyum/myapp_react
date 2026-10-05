

//==================================================
//Uncontrolled example
import { useRef, useState } from "react"

function Contact() {
    const nameInput = useRef()
    const [name, setName] = useState("")

    const showName = () => {
        setName(nameInput.current.value)
        console.log(nameInput.current.value)
    }
    return (
        <div>

            <h2>Name Form</h2>
            <input type="text" ref={nameInput} placeholder="Enter your name" />
            <button onClick={showName}>Show Name</button>
            <p>Name: {name}</p>

        </div>
    )
}

export default Contact