import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationBar from './NavigationBar'

const CalenderPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CalenderPage</Text>
      <View style={styles.spacer} />
      <NavigationBar />
    </View>
  )
}

export default CalenderPage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
    },
    text:{
        fontSize: 50,
        color: 'green',
        textAlign: 'center',
    },
    spacer: {
        flex: 1,
    },
})