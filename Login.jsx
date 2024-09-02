import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Image,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import login from '../Test/assets/Login.jpg'


export default function Login() {
    const navigation = useNavigation();
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    

    const apiUrl = 'http://18.237.111.97:2000/api/login';

const formSubmit = async()=>{

    if (!email || !password) {
        Alert.alert('Validation Error', 'Email and Password are required.');
        return;
    }
    const loginData = {
        email: email,
        password: password,
    }
    try {
                const response = await axios.post(apiUrl, loginData);
                console.log(response.data);

                const token = response.data.token;
                await AsyncStorage.setItem('token', token);
                Alert.alert('Login Successfull');
                navigation.navigate('PatientList');
                // Navigate to another screen or show success message
            } catch (err) {
                console.log(err.response);
                Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
            }
}


  return (
    <View style={styles.container}>
        <Image
  source={require('../Test/assets/Login.jpg')}
  style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 24 }}
/>

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Sign in using phone number</Text>

      <View style={styles.inputContainer}>
      
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
         
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry 
        
         
        />
       
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot password</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>or sign in using email</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={formSubmit} >
        <Text style={styles.signInButtonText}>Sign In</Text>
        <Icon name="arrow-forward-circle" size={24} color="white" />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.signInButton} onPress={formSubmit}>
                <Text style={styles.signInButtonText}>Sign In</Text>
                <Icon name="arrow-forward-circle" size={24} color="black" />
            </TouchableOpacity> */}

      <TouchableOpacity>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>



  



  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
      justifyContent: 'center',
    //   backgroundColor:'red'

    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#14274E',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      color: '#777',
      marginBottom: 24,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 16,
    },
    countryCode: {
      fontSize: 16,
      color: '#777',
      marginRight: 8,
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingVertical: 10,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
    },
    linkText: {
      fontSize: 14,
      color: '#14274E',
    },
    signInButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#14274E',
      paddingVertical: 12,
      borderRadius: 8,
      marginBottom: 16,
    },
    signInButtonText: {
      color: 'white',
      fontSize: 18,
      marginRight: 8,
    },
    signUpText: {
      textAlign: 'center',
      fontSize: 16,
      color: '#14274E',
    },
  });
  





// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 24,
//     },
//     color: {
//         color: '#9b111e',
//     },
//     inline: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 20,
//     },
//     gap: {
//         marginVertical: 10,
//     },
//     header: {
//         marginVertical: 36,
//     },
//     title: {
//         fontSize: 27,
//         fontWeight: 'bold',
//         color: 'black',
//         marginBottom: 36,
//         alignSelf: 'center',
//     },
//     subtitle: {
//         fontSize: 16,
//         color: '#929292',
//         fontWeight: '500',
//         textAlign: 'center',
//         paddingBottom: 45,
//     },
//     inputControl: {
//         height: 44, // Removed quotes to make it numeric
//         width: '100%', // Set to 100% to fill the parent container
//         borderWidth: 1,
//         borderColor: 'black',
//         backgroundColor: 'white',
//         borderRadius: 10,
//         fontSize: 15,
//         fontWeight: '500',
//         paddingHorizontal: 20,
//         paddingVertical: 7,
//     },
//     btn: {
//         backgroundColor: '#9b111e',
//         borderRadius: 40,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 12,
//         paddingHorizontal: 20,
//     },
//     btnText: {
//         fontSize: 20,
//         fontWeight: '600',
//         color: '#fff',
//     },
//     formAction: {
//         marginVertical: 24,
//     },
//     formFooter: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#9b111e',
//         textAlign: 'center',
//         marginTop: 15,
//     },
// });
