import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './src/components/Page1';
import RegisterPage from './src/components/RegisterPage';
import LanguageSetup from './src/components/LanguageSetup';
import { enableScreens } from 'react-native-screens';
import {NativeStackScreenProps} from "@react-navigation/native-stack"

enableScreens();

export type RootStackParamList = {
  Page1: undefined;
  RegisterPage: undefined;
  LanguageSetup: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="LanguageSetup" component={LanguageSetup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
