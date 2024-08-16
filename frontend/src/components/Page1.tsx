import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LanguageSetup from './LanguageSetup'
import LottieView from 'lottie-react-native';

export default function Page1() {
  return (
    <View>
       <LottieView source={require('../assets/final-lottie.json')} autoPlay loop />;
        <LanguageSetup />
    </View>
  )
}

const styles = StyleSheet.create({})