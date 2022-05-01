import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"; 



export const Register =() =>{
    const [form, setForm] = useState([]);
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setForm({
          ...form,
          [name]: value,
        });
      };
    
      const register = () => {
        fetch(`https://apartment-flat-manager.herokuapp.com/manager`, {
          method: "POST",
          body: JSON.stringify(form),
          headers: { "content-type": "application/json" },
        })
          .then((d) => d.json())
          .then((res) => {
            console.log(res);
            if(res.message){
                alert("User Already Registered !!");
            }else{
                  alert("User Registered Successfully !!")
            navigate("/login");
            }
          
          });
      };
    

    return (
        <div id="regDiv"
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
        
        <h1>Register</h1>
        <input
        style = {{
          width: "200px",
          margin: "10px",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
        type="text"
        onChange={handleChange}
        name="first_name"
        placeholder="First Name"
      />
       <input
       style = {{
        width: "200px",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
        type="text"
        onChange={handleChange}
        name="last_name"
        placeholder="Last Name"
      />
       <input
       style = {{
        width: "200px",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
        type="text"
        onChange={handleChange}
        name="gender"
        placeholder="Gender"
      />
       <input
       style = {{
        width: "200px",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
        type="number"
        onChange={handleChange}
        name="age"
        placeholder="Age"
      />
      <input
      style = {{
        width: "200px",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
        type="text"
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <input
      style = {{
        width: "200px",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc"
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
       onClick={register}>Register</button>
     <p
     style={{
      margin: "0",
      padding: "0",
      marginTop: "2rem",
      marginBottom: "2rem",
      textAlign: "center",

   }}
     > Already Registered ? <Link
     style={{
      color: "#000000",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "1.2rem",
    }} to={"/login"}>Log in</Link></p>
     </div>
    );
}