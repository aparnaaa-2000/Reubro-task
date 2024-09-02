import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View ,Image,FlatList } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function PatientList() {
// const [state,setState]= useState()
const [patients, setPatients] = useState([]);


    const apiUrl = 'http://18.237.111.97:2000/api/patient_list';

    // const fetchPatients = async () => {
    //     try {
    //         const token = await AsyncStorage.getItem('token');
    //         const response = await axios.get(apiUrl, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`, // Include the token in the Authorization header
    //             },
    //         });
    //         setPatients(response.data); // Assuming the response data contains the patient list
    //     } catch (error) {
    //         console.error(error);
    //         Alert.alert('Error', 'Failed to fetch patient list.');
    //     }
    // };
    const fetchPatients = async () => {
        try {
            const token = await AsyncStorage.getItem('token'); // Retrieve the token
            if (!token) {
                Alert.alert('Error', 'Token not found. Please log in again.');
                return;
            }
    
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the Authorization header
                },
            });
            setPatients(response.data); // Assuming the response data contains the patient list
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                Alert.alert('Unauthorized', 'Your session has expired. Please log in again.');
                // Optionally navigate to login screen
                // navigation.navigate('Login');
            } else {
                Alert.alert('Error', 'Failed to fetch patient list.');
            }
        }
    };
    

    useEffect(() => {
        fetchPatients(); 
    }, []);

    // const renderPatient = ({ item }) => (
    //     <View style={styles.patientItem}>
    //         <Text style={styles.patientName}>{item.name}</Text>
    //         <Text>{item.email}</Text>
    //     </View>
    // );

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get('YOUR_API_ENDPOINT', {
                    headers: {
                        Authorization: `Bearer YOUR_TOKEN`,
                    },
                });
                setPatients(response.data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    const renderPatient = ({ item }) => (
        <View style={styles.patientContainer}>
            <Image
                source={{ uri: item.profile }}
                style={styles.profileImage}
            />
            <View>
                <Text style={styles.patientName}>
                    {item.name?.toString() || 'N/A'}
                </Text>
                <Text>{item.email?.toString() || 'N/A'}</Text>
                <Text>{item.age?.toString() || 'N/A'}</Text>
            </View>
        </View>
    );

  return (
    <View style={styles.container}>
        <Text style={{fontSize:25}}>
            Hi, Amy!
        </Text>
        <Text style={{fontSize:15}}> Select a patient to help them out</Text>
        <Text style={{fontSize:30,gap:3}}>Patients</Text>

        {/* <View style={styles.card}>
            <Text>Betty</Text>
            <Text>beguyhunnnnunuju</Text>
        </View> */}
        <View style={styles.padd}>

        
          <View style={styles.card}>
        <Text style={styles.title}></Text>
        <Text style={styles.content}>
        {/* <FlatList
                data={patients}
                renderItem={renderPatient}
                keyExtractor={(item) => item.id.toString()} // Assuming each patient has a unique ID
            /> */}

<FlatList
            data={patients}
            renderItem={renderPatient}
            keyExtractor={(item) => item.patient_id?.toString()}
        />
        </Text>
      </View>
      {/* <View style={styles.card}>
        <Text style={styles.title}>Card Title</Text>
        <Text style={styles.content}>
          This is a simple card with a shadow effect in React Native.
        </Text>
      </View> */}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: 'white',
        // justifyContent: 'center',
      //   backgroundColor:'red'
  
      },
    //   card:{
    //     borderColor
    //   }
    card: {
        width: 350,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 5, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      content: {
        marginTop: 10,
        fontSize: 14,
      },
      padd:{
        // padding:20,
        gap:10,
      },
})
