import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    documentType: '',
    documentNumber: '',
    phone: '',
    email: '',
    appointmentDate: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Nombre es requerido'),
    lastName: Yup.string().required('Apellido es requerido'),
    age: Yup.number().required('Edad es requerida').min(1, 'Edad debe ser mayor que 0'),
    documentType: Yup.string().required('Tipo de documento es requerido'),
    documentNumber: Yup.string().matches(/^[0-9]+$/, 'Número de documento debe contener solo números').required('Número de documento es requerido'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Teléfono debe contener solo números').required('Teléfono es requerido'),
    email: Yup.string().email('Correo electrónico no válido').required('Correo electrónico es requerido'),
    appointmentDate: Yup.date().required('Fecha de agendamiento es requerida'),
  });

  const handleFormSubmit = (values) => {
    Alert.alert('Agendamiento exitoso', 'Su agendamiento ha sido exitoso');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
        <ScrollView contentContainerStyle={styles.container}>
          <Text>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
          />
          {touched.firstName && errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

          <Text>Apellido:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
          />
          {touched.lastName && errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

          <Text>Edad:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
            value={values.age}
          />
          {touched.age && errors.age && <Text style={styles.errorText}>{errors.age}</Text>}

          <Text>Tipo de Documento:</Text>
          <Picker
            selectedValue={values.documentType}
            style={styles.input}
            onValueChange={(itemValue) => setFieldValue('documentType', itemValue)}
          >
            <Picker.Item label="Selecciona un tipo de documento" value="" />
            <Picker.Item label="Cédula de Ciudadanía" value="cc" />
            <Picker.Item label="Tarjeta de Identidad" value="ti" />
            <Picker.Item label="Pasaporte" value="passport" />
            <Picker.Item label="Cédula de Extranjería" value="ce" />
          </Picker>
          {touched.documentType && errors.documentType && <Text style={styles.errorText}>{errors.documentType}</Text>}

          <Text>Número de Documento:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={handleChange('documentNumber')}
            onBlur={handleBlur('documentNumber')}
            value={values.documentNumber}
          />
          {touched.documentNumber && errors.documentNumber && <Text style={styles.errorText}>{errors.documentNumber}</Text>}

          <Text>Teléfono:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
          />
          {touched.phone && errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

          <Text>Correo Electrónico:</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <Text>Fecha de Agendamiento:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('appointmentDate')}
            onBlur={handleBlur('appointmentDate')}
            value={values.appointmentDate}
          />
          {touched.appointmentDate && errors.appointmentDate && <Text style={styles.errorText}>{errors.appointmentDate}</Text>}

          <Button onPress={handleSubmit} title="Agendar" />
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default App;
