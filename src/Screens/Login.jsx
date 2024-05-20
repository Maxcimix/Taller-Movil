import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import firebase from '../../firebase/firebase';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
//johan@hotmail.com
//123456
const auth = getAuth(firebase);

export default function Login(props) {
  //Creamos la variable estado
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();

  const logueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, Password);
      Alert.alert('Iniciando sesion','Accediendo...')
      props.navigation.navigate('Home')
    } catch (error) {
      console.log(error);
      Alert.alert('Error','Correo o contraseña incorrectas')
    }
  };

  const navigation = useNavigation();
  return (
    <View style={styles.padre}>
      <View>
        <Image
          source={require('../../assets/Logo.jpg')}
          style={styles.profile}
        />
      </View>
      <View style={styles.tarjeta}>
        <View style={styles.cajaTexto}>
          <TextInput
            placeholder="correo@gmail.com"
            style={{paddingHorizontal: 15}}
            keyboardType="email-address"
            onChangeText={(text)=>setEmail(text)}
          />
        </View>
        <View style={styles.cajaTexto}>
          <TextInput
            placeholder="Password"
            style={{paddingHorizontal: 15}}
            secureTextEntry={true}
            maxLength={8}
            onChangeText={(text)=>setPassword(text)}
          />
        </View>

        <View style={styles.padreBoton}>
          <TouchableOpacity style={styles.cajaBoton} onPress={logueo}>
            <Text style={styles.textoBoton}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.CreateBoton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ScreenCreateUser')}
            style={styles.CreatecajaBoton}>
            <Text style={styles.textoBoton}>Create User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  CreateBoton: {alignItems: 'center'},
  CreatecajaBoton: {
    backgroundColor: '#525FE1',
    borderRadius: 20,
    paddingVertical: 15,
    width: 100,
    marginTop: 20,
  },
  padre: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: 'white',
  },
  tarjeta: {
    margin: 20,
    backgroundColor: 'while',
    borderRadius: 20,
    width: '90%',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {while: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: '#CCCCCC40',
    borderRadius: 30,
    marginVertical: 10,
  },
  padreBoton: {alignItems: 'center'},
  cajaBoton: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    width: 150,
    marginTop: 20,
  },
  textoBoton: {textAlign: 'center', color: 'while'},
});
