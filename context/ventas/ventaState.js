import React, {useReducer} from 'react';

import ventaContext from './ventaContext';
import ventaReducer from './ventaReducer';

const VentaState = props => {
  // Crear el estado inicial

  const inicialState = {venta: []};

  // Crear el UseReduce se crea de la siguiente manera:
  const [state, dispatch] = useReducer(ventaReducer, inicialState);
  return (
    <ventaContext.Provider value={{venta: state.venta}}>
      {props.children}
    </ventaContext.Provider>
  );
};

export default VentaState;