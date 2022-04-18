
import {Navigate} from "react-router-dom"
import { useState, useSelector } from "react"
import { useDispatch } from "react-redux"



export const PrivateRoute = () => {
const dispatch = useDispatch();
let token = useSelector(state => state.auth);
console.log(token);

if(!token) {
    return <Navigate to={"/login"}/>
}
 return children;
}
