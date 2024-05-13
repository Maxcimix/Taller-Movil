import React, {useReducer} from 'react';
import firebase from '../../firebase';
import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';

import _ from 'lodash';

import {OBTENER_VEHICLE_EXITO} from '../../type';
//Screens
import Catalog from '../../src/Screens/Catalog';

const FirebaseState = props => {
  // Crear el estado inicial

  const inicialState = {Catalog: []};

  // Crear el UseReduce se crea de la siguiente manera:
  const [state, dispatch] = useReducer(firebaseReducer, inicialState);
  // traer los datos

  /*const obtenerVehicle = () => {
    //consulta a la bd
    firebase.db.collection('Vehicle').onSnapshot(manejarSnapshot); // Manejo de la db en tiempo real

    function manejarSnapshot(snapshot) {
      let marca = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      marca = _.sortBy(marca, 'categoriaScrollView');
      //console.log()
      dispatch({
        type: OBTENER_VEHICLE_EXITO,
        payload: marca,
      });
    }
  };*/
  return (
    <FirebaseContext.Provider
      value={{Catalog: state.Catalog, firebase}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
