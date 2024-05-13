import React, {useState} from 'react';
import {View, TextInput, Button, Alert} from 'react-native';

const InformationRequest = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [identification, setIdentification] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    Alert.alert(
      'Request for Information Sent',
      `First Name: ${firstName}\nLast Name: ${lastName}\nIdentification: ${identification}\nPhone Number: ${phoneNumber}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Identification"
        value={identification}
        onChangeText={setIdentification}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <Button title="Submit Request" onPress={handleSubmit} />
    </View>
  );
};

export default InformationRequest;
