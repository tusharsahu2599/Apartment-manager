// import { APARTMENT_DETAILS } from "./action";
let initialState = {
    data: []
};


const flatsReducer = (store = initialState, action) => {
  // console.log(action);
  switch (action.type) {  
    
    case "APARTMENT_DETAILS":
      return {
        ...store,
        data: action.payload,
      };
    default:
      return store;
  }
}

export {flatsReducer}


