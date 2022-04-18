import { createStore } from "redux";
import {flatsReducer} from "./reducer";
import {authReducer} from "./auth/reducer";
import { combineReducers } from "redux";


// const allReducers = combineReducers({
//     flats: flatsReducer,
//     auth: authReducer
// });


const store = createStore(flatsReducer,{
    data: [],
});

export default store;

