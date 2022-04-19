
import { Link } from "react-router-dom";

export const Home = () =>{

    return (<div >
        <div>
        <h1 >Welcome to my house website</h1>
        <p>check houses after login</p>
        <button><Link to="/login">Lets Go..</Link></button>
        </div>
        
    </div>
    )
}

