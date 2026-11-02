import { useContext } from "react"
import { PersonContext ,NameContext} from "./PersonContext"
function Detial() {
    const detail = useContext(PersonContext)
    const namelist = useContext(NameContext)
  return (
    <div>
        Firstname:{detail.firstname}
        Lastname:{detail.lastname}
        <h2>Person dedtail</h2>
        <p>First name :{namelist.firstname}</p>
        <p>Last name :{namelist.lastname}</p>
    </div>
  )
}
export default Detial