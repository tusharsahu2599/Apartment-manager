// import "./Login.css"

import { useContext, useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useDispatch, useSelector} from "react-redux";

import axios from "axios"


export const Login = () => {
  const [form, setForm] = useState(
    {
      email: "",
      password: ""
    } 
  );

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  let dispatch = useDispatch();
  let token = useSelector(state => state.auth);


  const login = () => {
    axios.post(`https://apartment-flat-manager.herokuapp.com/manager/${form.email}`, form)
      .then((res) => {
        console.log(res);
        if (res.data.token) {
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
      dispatch({ type: "AUTHORIZATION", payload: user_token });
      navigate("/flat");
      console.log("User:", user_token);
    }
  };

  

 
  return (
    <div id="loginDiv">
        <h1>Log In</h1>
      <input
        type="text"
        onChange={handleChange}
        name="email"
        placeholder="Email"
      />
      <input
        type="password"
        onChange={handleChange}
        name="password"
        placeholder="Password"
        />
      <button onClick={login}>Login</button>   
     <p id="regLine"> Don't have a account ? <Link id="regLink" to={"/register"}>Register</Link></p>
    </div>
  );
};
