import { useState } from "react" 
function Contact4(){
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [contact, setContact] = useState({id:"", email:"", phone:""})

    const [contacts, setContacts] = useState([])

    const handleChange = (event) => {
        setContact({...contact, [event.target.name]:event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(contact)
        setContacts([...contacts, contact])
        setContact({id:"", email:"", phone:""})
        console.log(contacts)
    }

    return (
        <>
            <h1>Contact Form</h1>

            <h2>Individual State</h2>

            <div>
                Enter your email:
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

                Enter phone number:
                <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </div>

            <h2>Email: {email} | Phone: {phone}</h2>

            {/* ================================================================ */}

            <h2>Object State - One Contact</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    
                    Enter your email:
                    <input type="email" name="email" value={contact.email} onChange={handleChange} />

                    Enter phone number:
                    <input type="text" name="phone" value={contact.phone} onChange={handleChange} />

                    <button type="submit">Add Contact</button>
                </div>
            </form>

            {/* ================================================================= */}

            <h2>Current Contact</h2>
            <p>Email: {contact.email} | Phone: {contact.phone}</p>
            {/* =================================================================== */}

            <h2>Array State - Multiple Contacts</h2>

            {contacts.map((c, index) => (
                <p key={index}>{index + 1}. Email: {c.email} | Phone: {c.phone}</p>
            ))}
        </>
    )
}

export default Contact4