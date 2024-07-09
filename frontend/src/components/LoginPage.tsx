import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];


export default function LoginPage() {
  return (
    <>
      <ImageBackground source={require('../assets/Field.jpg')} style={styles.backgroundImage}>
      <Text style={styles.text}>Test</Text>
      </ImageBackground>
    </>
)
}

const styles = StyleSheet.create({
  backgroundImage:{
    height: '100%',
    width: '100%',
  },
  text:{
    fontSize:40,
    textAlign:'center',
    color:'black',
  }
})
