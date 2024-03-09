import { useState } from "react"
import { Link } from "react-router-dom";

export const Landing = () => {

    const [name, setName] = useState("");
    return <div>
        <input type="text" onChange={(e)=> {
            setName(e.target.value);
        }}>
        </input>

        <Link to={`/room/?name=${name}`} onClick={()=> {
            //join the meeting here 

        }}>join</Link>
    </div>
}