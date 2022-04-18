// import { APARTMENT_DETAILS } from "./action";
let initialState = {
    data: [],
    auth: "",
};


const authReducer = (store = initialState, action) => {
  // console.log(action);
  switch (action.type) {  
    
    case "AUTHORIZATION":
      return {
        ...store,
        data: action.payload,
      };
    default:
      return store;
  }
}

export {authReducer};


