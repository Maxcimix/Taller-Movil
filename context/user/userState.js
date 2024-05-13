import React, {useReducer} from 'react';

import userContext from './userContext';
import userReducer from './userReducer';

const VentaState = props => {
  // Crear el estado inicial

  const inicialState = {venta: []};

  // Crear el UseReduce se crea de la siguiente manera:
  const [state, dispatch] = useReducer(userReducer, inicialState);
  return (
    <userContext.Provider value={{venta: state.venta}}>
      {props.children}
    </userContext.Provider>
  );
};

export default userState;