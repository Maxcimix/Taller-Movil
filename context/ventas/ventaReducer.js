import { SELECCIONAR_VEHICLE } from "../../type";


export default (state, action) => {
    switch (action.type) {
       case SELECCIONAR_VEHICLE:
        return{
            ...state,
            cat: action.payload

        }
      
        
      default:
        return state;
    }
  };