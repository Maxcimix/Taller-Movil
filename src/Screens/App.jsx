import React from 'react';
import { Text, Button, Alert, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Picker } from '@react-native-picker/picker';
import { styles } from './ScreenTestDrive';

export const App = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    documentType: '',
    documentNumber: '',
    phone: '',
    email: '',
    appointmentDate: '',
    vehicleType: '', // Nuevo campo para el tipo de vehículo
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
    vehicleType: Yup.string().required('Tipo de vehículo es requerido'), // Validación para el tipo de vehículo
  });

  const handleFormSubmit = (values) => {
    Alert.alert('Agendamiento exitoso', 'Su agendamiento ha sido exitoso');
    // Aquí puedes manejar los datos del formulario, incluido el tipo de vehículo
    console.log('Datos del formulario:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
        <ScrollView contentContainerStyle={styles.container}>
          {/* Resto del formulario... */}

          {/* Nuevo campo para seleccionar el tipo de vehículo */}
          <Text>Tipo de Vehículo:</Text>
          <Picker
            selectedValue={values.vehicleType}
            style={styles.input}
            onValueChange={(itemValue) => setFieldValue('vehicleType', itemValue)}
          >
            <Picker.Item label="Selecciona un tipo de vehículo" value="" />
            <Picker.Item label="Automóvil" value="car" />
            <Picker.Item label="Motocicleta" value="motorcycle" />
            <Picker.Item label="Camión" value="truck" />
            {/* Agrega más tipos de vehículos según sea necesario */}
          </Picker>
          {touched.vehicleType && errors.vehicleType && <Text style={styles.errorText}>{errors.vehicleType}</Text>}

          {/* Botón de envío */}
          <Button onPress={handleSubmit} title="Agendar" />
        </ScrollView>
      )}
    </Formik>
  );
};
