import { View, Text, SafeAreaView, Pressable, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Page1'>;

const NavigationBar = () => {
  const [activeButton, setActiveButton] = useState(null);
  const navigation = useNavigation();

  const handlePress = (button) => {
    setActiveButton(button);
    navigation.navigate(`${button}Page`);
  };

  return (
    <SafeAreaView>
      <View style={styles.line}></View>
      <View style={styles.container}>
        <View>
          <Pressable
            onPress={() => handlePress('Profile')}
            style={[styles.pressable, activeButton === 'Profile' && styles.pressableActive]}
          >
            <Image style={styles.image} source={require('../assets/profile.png')} />
            <Text style={activeButton === 'Profile' ? styles.activeText : styles.inactiveText}>Profile</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => handlePress('Farm')}
            style={[styles.pressable, activeButton === 'Farm' && styles.pressableActive]}
          >
            <Image style={styles.image} source={require('../assets/tractor.png')} />
            <Text style={activeButton === 'Farm' ? styles.activeText : styles.inactiveText}>Farm</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => handlePress('Calender')}
            style={[styles.pressable, activeButton === 'Calender' && styles.pressableActive]}
          >
            <Image style={styles.image} source={require('../assets/calender.png')} />
            <Text style={activeButton === 'Calender' ? styles.activeText : styles.inactiveText}>Calender</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => handlePress('Disease')}
            style={[styles.pressable, activeButton === 'Disease' && styles.pressableActive]}
          >
            <Image style={styles.image} source={require('../assets/bug.png')} />
            <Text style={activeButton === 'Disease' ? styles.activeText : styles.inactiveText}>Disease</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => handlePress('Fertilizer')}
            style={[styles.pressable, activeButton === 'Fertilizer' && styles.pressableActive]}
          >
            <Image style={styles.image} source={require('../assets/fertilizer.png')} />
            <Text style={activeButton === 'Fertilizer' ? styles.activeText : styles.inactiveText}>Fertilizer</Text>
          </Pressable>
        </View>
        <View>
          <Pressable
            onPress={() => handlePress('Plots')}
            style={[styles.pressable, activeButton === 'Plots' && styles.pressableActive]}
          >
            <Image style={styles.image} source={require('../assets/plot.png')} />
            <Text style={activeButton === 'Plots' ? styles.activeText : styles.inactiveText}>Plots</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    padding: 10,
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
  },
  pressable: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  pressableActive: {
  },
  image: {
    width: 40,
    height: 40,
  },
  inactiveText: {
    color: 'black',
  },
  activeText: {
    color: '#65B741',
    fontWeight: 'bold',
  },
});

export default NavigationBar;
