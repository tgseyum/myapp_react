
import { useState } from "react"

function Contact2() {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [contact, setContact] = useState({id:"", email:"", phone:""})
    const [contacts, setContacts] = useState([])

    const handleChange = (event) => {
        setContact({...contact, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setContacts([...contacts, contact])
        setContact({id:"", email:"", phone:""})
    }

    return (
        <>
            <h1>Contact Form</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    Enter your email:
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

                    Enter phone number:
                    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                </div>

                <h2>Input Type Object</h2>

                <div>
                    Enter your email:
                    <input type="email" name="email" value={contact.email} onChange={handleChange} />

                    Enter phone number:
                    <input type="text" name="phone" value={contact.phone} onChange={handleChange} />

                    <button type="submit">Submit</button>
                </div>
            </form>

            <h2>Display Contact</h2>
            <p>Email: {contact.email} | Phone: {contact.phone}</p>

            <h2>All Contacts</h2>

            {contacts.map((c, index) => (
                <p key={index}>{index + 1}. Email: {c.email} | Phone: {c.phone}</p>
            ))}
        </>
    )
}

export default Contact2
