import { Link } from "react-router-dom"
import "./About.css"
import contact from "./Contact.module.css"

function Navigation(){
    return(
        <>
             
      <div className={contact.container}>
        <Link to="/">Home | </Link>
        <Link to="/about">| About | </Link>
        <Link to="/contact" >Contact |</Link>
        <Link to="/courses" >| Courses </Link>
      </div>
      </>
    )
}
export default Navigation