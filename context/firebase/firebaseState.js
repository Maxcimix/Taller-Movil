import React, { useReducer } from 'react';
import firebase from '../../firebase';
import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';
import _ from 'lodash';
import { OBTENER_VEHICLE_EXITO } from '../../type';

//Screens
import Catalog from '../../src/Screens/Catalog';
import men from '../../src/Screens/Menu';

const FirebaseState = props => {
  // Crear el estado inicial
  const inicialState = {
    men: []
  };

  // usar el UseReducer
  const [state, dispatch] = useReducer(firebaseReducer, inicialState);
  // traer los datos
  const obtenerProductos = () => {
    //consulta a la bd
    firebase.db
      .collection('vehicle')
      .onSnapshot(manejarSnapshot); // Manejo de la db en tiempo real

    function manejarSnapshot(snapshot) {
      let cat = snapshot.docs.map(doc => {
        return {
          //organiza por ID y trae copia de la db
          id: doc.id,
          ...doc.data()
        }
      });
      
      //organiza por categoria
      cat = _.sortBy(cat, 'categoriaScrollView');
      console.log(cat)
      //estados por los que pasa
      dispatch({
        type: OBTENER_VEHICLE_EXITO,
        payload: cat
      })
    }
  };
  return (
    <FirebaseContext.Provider
      value={{
        men: state.men,
        firebase,
        obtenerProductos     // revisar aca si no esta cargando o enviando informacion al firebase
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
