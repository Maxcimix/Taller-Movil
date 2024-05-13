import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', marginTop: '20%'}}>
        WELCOME TO MY CONCESSIONAIRE Hola
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: 'purple',
          padding: 10,
          marginTop: '15%',
          width: '50%',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 25, textAlign: 'center', color: 'white'}}>
          {' '}
          Log in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ScreenTestDrive')}
        style={{
          backgroundColor: 'purple',
          padding: 10,
          marginTop: '8%',
          width: '50%',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 25, textAlign: 'center', color: 'white'}}>
          {' '}
          Test Drive
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
