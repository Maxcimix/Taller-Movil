import app from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'; // Asegúrate de importar auth
import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.db = app.firestore();
    this.auth = app.auth(); // Inicializa auth
    console.log('Realizo conexion');
  }
}

const firebase = new Firebase();
export default firebase;
