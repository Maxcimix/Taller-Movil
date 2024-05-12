import React,{useState} from 'react';
import {ScrollView, TextInput, View, Button, StyleSheet} from 'react-native';


//const [state, setState] = useState(initalState);

const ScreenCreateUser = () => {
  return (
    <ScrollView>
      <View>
        <TextInput placeholder="Name User"></TextInput>
      </View>
      <View>
        <TextInput placeholder="Email User"></TextInput>
      </View>
      <View>
        <TextInput placeholder="Phone User"></TextInput>
      </View>
      <View>
        <Button title="Save User"/>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35
    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc"
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center"
    },
  });

export default ScreenCreateUser;