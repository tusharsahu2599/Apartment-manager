

import { useContext, useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export const Login = () => {
  const [form, setForm] = useState([]);
  const { handleToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = () => {
    fetch(`https://apartment-flat-manager.herokuapp.com/manager/${form.email}`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "content-type": "application/json" },
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        
        if (res.token) {
          if (localStorage.getItem("user_token") === null) {
            localStorage.setItem("user_token", JSON.stringify(res.token));
          } else {
            localStorage.setItem("user_token", JSON.stringify(res.token));
          }
          alert("Login successful !!"); 
          navigate("/flat");
        } else {
          alert(res.message);
        }
      });
  };


  useEffect(() => {
    userToken();
  }, [login]);

  const userToken = () => {
    
    let user_token = JSON.parse(localStorage.getItem("user_token"));
    if (user_token) {
      handleToken(user_token);  
      navigate("/flat");
      console.log("User:", user_token);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

 
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
        <h1>Log In</h1>
      <input
        type="text"
        style = {{
          width: "200px",
          margin: "10px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <input
      style = {{
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        margin : "10px",
        width: "200px",
        
      }}
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
      />
      <button
      style = {{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        margin: "10px",
        width: "200px",
      }}
      onClick={login}>Log In</button>
     <p 
     style={{
        margin: "0",
        padding: "0",
        marginTop: "2rem",
        marginBottom: "2rem",
        textAlign: "center",

     }}
     > Don't have a account ? <Link
     style={{
        color: "#000000",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "1.2rem",
      }}
      
     to={"/register"}>Register</Link></p>
    </div>
  );
};
