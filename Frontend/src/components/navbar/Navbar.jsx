import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { handleToken } = useContext(AuthContext);

  let token = JSON.parse(localStorage.getItem("user_token"));

  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user_token");
    handleToken("");
    
    navigate("/");
  };

  return (
    <div id="navbar"
    style={{ 
    height: "100px",
    display: "flex",
    flexDirection: "row",
    position: "sticky",
    top : "0",
    boxShadow : "0px 0px 10px #ccc",
    
    // alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "teal",

  }}
    >
      <Link 
      style={{
        color: "#000000",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.2rem",
        padding: "2vw"
      }}
      className="link" to={"/"}>
          Home
      </Link>

      {token === null ? 
      <Link 
      style={{
        color: "#000000",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.2rem",
        padding: "2vw",
      }}
      to={"/login"}>
          Log In
      </Link> :
      <button 
      style={{
        paddingLeft: "8vw",
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#000000",
        margin: "0",
        padding: "0",
        marginTop: "2rem",

      }}
      onClick={logout}>
         Log Out
        </button>
       
      }
    </div>
  );
};
