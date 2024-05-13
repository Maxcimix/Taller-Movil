import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const ScheduleTestDriveForm = () => {
  const [date, setDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [identification, setIdentification] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = () => {
    Alert.alert(
      'Test Drive Appointment Scheduled',
      `Date: ${date}\nFull Name: ${fullName}\nIdentification: ${identification}\nPhone Number: ${phoneNumber}`,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <TextInput
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
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
      <Button
        title="Schedule Appointment"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default ScheduleTestDriveForm;