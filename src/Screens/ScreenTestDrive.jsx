import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [numeroDocumento, setNumeroDocumento] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('');

  const handleRegistro = () => {
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Edad:', edad);
    console.log('Tipo de Documento:', tipoDocumento);
    console.log('Número de Documento:', numeroDocumento);
    console.log('Email:', email);
    console.log('Dirección:', direccion);
    console.log('Tipo de Vehículo:', tipoVehiculo);

    Alert.alert('Registro exitoso', 'Su registro ha sido exitoso');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput style={styles.input} placeholder="Nombre" onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Apellido" onChangeText={setApellido} />
      <TextInput style={styles.input} placeholder="Edad" onChangeText={setEdad} />
      <TextInput style={styles.input} placeholder="Tipo de Documento" onChangeText={setTipoDocumento} />
      <TextInput style={styles.input} placeholder="Número de Documento" onChangeText={setNumeroDocumento} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Dirección" onChangeText={setDireccion} />
      <TextInput style={styles.input} placeholder="Tipo de Vehículo" onChangeText={setTipoVehiculo} />
      <Button title="Registrarse" onPress={handleRegistro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#D8BFD8', // Color morado claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
});

export default Registro;
