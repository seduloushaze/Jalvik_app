import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function RegisterPage() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>RegisterPage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'gray',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
  }
})