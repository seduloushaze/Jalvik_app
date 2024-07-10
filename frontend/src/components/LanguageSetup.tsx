import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

const data = [
  { label: 'हिंदी', value: '1' },
  { label: 'English', value: '2' },
  { label: 'मराठी', value: '3' },
  { label: 'தமிழ்', value: '4' },
  { label: 'తెలుగు', value: '5' },
  { label: 'ગુજરાતી', value: '6' },
];

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Page1'>;

export default function LanguageSetup({ navigation }: NavigationProps) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (value === '2') {
      navigation.navigate('RegisterPage');
    }
  }, [value, navigation]);

  return (
    <ImageBackground source={require('../assets/Field.jpg')} style={styles.backgroundImage}>
      <Text style={styles.text}>LANGUAGE</Text>
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          itemTextStyle={{ fontSize: 20 }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'arial',
    color: '#FBE7C6',
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
