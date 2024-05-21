import React, { useState } from 'react';
import { ScrollView, TextInput, View, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebase/firebase'; // Asegúrate de importar firebase desde el archivo correcto

const ScreenCreateUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Email and Password are required!');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await firebase.auth.createUserWithEmailAndPassword(email, password);
      console.log('User created:', userCredential.user);
      Alert.alert('Success', 'User created successfully!');
      navigation.navigate('Login'); // Redirecciona al usuario al inicio de sesión después de registrarse
    } catch (error) {
      console.error('Error creating user:', error);
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={handleSignUp}
          disabled={loading}
        />
      </View>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </ScrollView>
  );
};

export default ScreenCreateUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: '#f5f5f5',
  },
  inputGroup: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
