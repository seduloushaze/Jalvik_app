import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationBar from './NavigationBar'

const PlotsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PlotsPage</Text>
      <View style={styles.spacer} />
      <NavigationBar/>
    </View>
  )
}

export default PlotsPage

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