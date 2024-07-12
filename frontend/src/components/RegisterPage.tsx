import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { server } from '../../metro.config';

export default function RegisterPage() {
  const [number, setNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async () => {
    console.log('Number:', number);
    
    const url = 'http://192.168.1.11:8000/apis/check_number/'; // Replace with your server IP
    const data = { number: number };

    const headers = {
      'Content-Type': 'application/json'
    };
    try {
      const response = await axios.post(url, data, { headers });
      setResponseMessage(response.data.message || 'Number saved successfully');
      setErrorMessage('');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.number ? error.response.data.number[0] : 'An error occurred');
        console.log('Axios error:', error.response?.data);
      } else {
        console.log(error);
        setErrorMessage('An unexpected error occurred');
        console.log('Unexpected error:', error);
      }
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.textboxlabel}>
        <Text style={styles.text}>Number:</Text>
      </View>
      <TextInput
        placeholder="Enter your number"
        style={styles.textbox}
        keyboardType="numeric"
        value={number}
        onChangeText={(text) => setNumber(text)}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button title="Submit" onPress={handleSubmit} />
      {responseMessage ? <Text style={styles.response}>{responseMessage}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    width: '70%',
    fontSize: 15,
    borderWidth: 2,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: '#65B741',
  },
  textboxlabel: {
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  response: {
    color: 'green',
    marginTop: 10,
  },
});
