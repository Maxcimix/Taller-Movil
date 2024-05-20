import React, { useReducer } from 'react';

import ventaContext from './ventaContext';
import ventaReducer from './ventaReducer';
import { SELECCIONAR_VEHICLE } from '../../type';

const VentaState = props => {
  // Crear el estado inicial

  const inicialState = {
    venta: [],
    cat: null //Platillo profe

  };

  // Crear el UseReduce se crea de la siguiente manera:
  const [state, dispatch] = useReducer(ventaReducer, inicialState);
 
  //Se envia en el pedido context
  const seleccionarPedido = cat => {
    dispatch({
      type: SELECCIONAR_VEHICLE,
      payload: cat
    })
  }
  return (
    <ventaContext.Provider
      value={{
        venta: state.venta, //pedido profe
        pedido: state.cat,
        seleccionarPedido

      }}
    >
      {props.children}
    </ventaContext.Provider>
  );
};

export default VentaState;