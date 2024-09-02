import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import PatientList from './PatientList';
import NewTask from './NewTask';

const Stack = createNativeStackNavigator();
 function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='PatientList' component={PatientList}/>
      <Stack.Screen name='NewTask' component={NewTask}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
export default App;
