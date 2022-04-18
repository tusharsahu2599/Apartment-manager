import { createStore } from "redux";
import {flatsReducer} from "./reducer";
import {authReducer} from "./auth/reducer";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    flats: flatsReducer,
    auth: authReducer
});


const store = createStore(allReducers,
    + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;

