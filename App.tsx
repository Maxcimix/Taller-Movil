import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Provider as ReactPaperProvider} from 'react-native-paper';

//Screens
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import Catalog from './src/Screens/Catalog';
import men from './src/Screens/Menu';
import ScreenTestDrive from './src/Screens/ScreenTestDrive';
import FirebaseContext from './context/firebase/firebaseContext';
import VentaState from './context/ventas/ventaState';
import FirebaseState from './context/firebase/firebaseState';
import ScreenCreateUser from './src/Screens/ScreenCreateUser';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="MenuScreen" component={Catalog} />
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="ScreenTestDrive" component={ScreenTestDrive}/>
      <Stack.Screen name="ScreenCreateUser" component={ScreenCreateUser}/>
    </Stack.Navigator>
  );
}

function MyTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{tabBarActiveTintColor: '#33E0FF'}}>
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          headerShown: false,
          tabBarLabel: 'HOME',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Catalog"
        component={Catalog}
        options={{
          title: 'CATALOG',
          headerTintColor: 'while',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#525FE1'},
          tabBarLabel: 'CATALOG',
          tabBarIcon: ({color, size}) => (
            <Icon name="menu" size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="menu"
        component={men}
        options={{
          title: 'Menu',
          headerTintColor: 'while',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#525FE1'},
          tabBarLabel: 'Menu',
          tabBarIcon: ({color, size}) => (
            <Icon name=" " size={size} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          title: 'LOGIN',
          headerTintColor: 'while',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#525FE1'},
          tabBarLabel: 'LOGIN',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <ReactPaperProvider>
        <FirebaseState>
          <VentaState>
            <NavigationContainer>
              <MyTab />
            </NavigationContainer>
          </VentaState>
        </FirebaseState>
      </ReactPaperProvider>
    </>
  );
}
