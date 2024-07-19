import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from './src/components/Page1';
import RegisterPage from './src/components/RegisterPage';
import LanguageSetup from './src/components/LanguageSetup';
import { enableScreens } from 'react-native-screens';
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import FarmPage from './src/components/FarmPage';
import CalenderPage from './src/components/CalenderPage';
import DiseasePage from './src/components/DiseasePage';
import FertilizerPage from './src/components/FertilizerPage';
import PlotsPage from './src/components/PlotsPage';
import ProfilePage from './src/components/ProfilePage';

enableScreens();

export type RootStackParamList = {
  Page1: undefined;
  RegisterPage: undefined;
  LanguageSetup: undefined;
  FarmPage: undefined;
  CalenderPage: undefined;
  DiseasePage: undefined;
  FertilizerPage: undefined;
  PlotsPage: undefined;
  ProfilePage: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="LanguageSetup" component={LanguageSetup} />
        <Stack.Screen name="FarmPage" component={FarmPage } />
        <Stack.Screen name="CalenderPage" component={CalenderPage } />
        <Stack.Screen name="DiseasePage" component={DiseasePage } />
        <Stack.Screen name="FertilizerPage" component={FertilizerPage } />
        <Stack.Screen name="PlotsPage" component={PlotsPage } />
        <Stack.Screen name="ProfilePage" component={ProfilePage } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
