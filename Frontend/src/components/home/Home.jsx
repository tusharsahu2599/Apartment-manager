
import { Link } from "react-router-dom";

export const Home = () =>{

    return (
    <div
    style=
    {{ 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5"
    }}
    >
        <div
        style=
        {{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5"
        }}
        >
            <h1 
            style={{ 
                fontSize: "3rem",
                fontWeight: "bold",
                color: "#000000",
                margin: "0",
                padding: "0",
                marginTop: "2rem",
                marginBottom: "2rem",
                textAlign: "center",
            }}
            >Welcome to my house website</h1>
            <p>check houses after login</p>
            <button
            style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                margin: "10px",
                width: "200px",
            }}
            ><Link to="/login">Lets Go..</Link></button>
        </div> 
    </div>
    )
}

