import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
 
const Vehicle = ({ imageUrl, description, price }) => {
  return (
    <View>
      <Image source={{uri:imageUrl}}
             style={ style.img} />
      <Text style={{ marginTop: 10 }}>
        {description}
      </Text>
      <Text style={{ marginTop: 5, fontWeight: 'bold' }}>
        $ {price}
      </Text>
    </View>
  );
};
 
const style = StyleSheet.create({
  img:{
    width: 200,
    height:200
  }
})
 
export default Vehicle;