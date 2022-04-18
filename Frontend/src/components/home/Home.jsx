
import { Link } from "react-router-dom";

export const Home = () =>{

    return (<div >
        <div>
        <h1 >Welcome to MakeMyHouse</h1>
        <p>A House for Everyone</p>
        <button><Link to="/login">Lets Go..</Link></button>
        </div>
        
    </div>
    )
}

