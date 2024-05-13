import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const VehicleMaintenance = () => {
  const [date, setDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleSubmit = () => {
    Alert.alert(
      'Maintenance Appointment Scheduled',
      `Date: ${date}\nFull Name: ${fullName}\nPhone Number: ${phoneNumber}\nVehicle Model: ${vehicleModel}\nService Type: ${serviceType}`,
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
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Vehicle Model"
        value={vehicleModel}
        onChangeText={setVehicleModel}
      />
      <TextInput
        placeholder="Service Type"
        value={serviceType}
        onChangeText={setServiceType}
      />
      <Button
        title="Schedule Appointment"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default VehicleMaintenance;