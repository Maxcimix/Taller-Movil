import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import VehicleList from '../componets/VehicleList';

const Catalog = () => {
  const vehicles = [
    {
      id: 1,
      imageUrl: 'https://cdn.motor1.com/images/mgl/AkBE9P/s3/new-honda-civic-e-hev-hybrid-europe.jpg',
      description: 'Honda Civic, 2024',
      price: 25000,
    },
    {
      id: 2,
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/ford-f-150-raptor-2024-1-6502f263a6cce.jpg',
      description: 'Ford F150 raptor',
      price: 30000,
    },
    {
      id: 3,
      imageUrl: 'https://cdn.motor1.com/images/mgl/x60VP/s3/lanzamiento-ford-mustang-2020.jpg',
      description: '2020 Ford Mustang',
      price: 40001,
    },
  ];

  return (
    <ImageBackground
      source={require('../../assets/fondo2.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <VehicleList vehicles={vehicles} />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
});

export default Catalog;