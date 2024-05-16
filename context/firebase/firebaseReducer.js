import { OBTENER_VEHICLE_EXITO } from "../../type";

export default (state, action) => {
    switch (action.type) {
      case OBTENER_VEHICLE_EXITO:
        return{
          ...state,
          men: action.payload
        }
      default:
        return state;
    }
  };
  