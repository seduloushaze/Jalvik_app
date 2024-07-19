import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import NavigationBar from './NavigationBar';

export default function Profile() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.topcontainer}>
          <View>
            <Image
              style={styles.editprofile}
              source={require('../assets/editProfile.png')}
            />
          </View>
          <View>
            <Text style={styles.name}>Vaishnavi</Text>
            <Text style={styles.link}>View My Profile</Text>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <View style={styles.box}>
            <Image
              style={styles.images1}
              source={require('../assets/addPlot.png')}
            />
            <Text style={styles.text}>Add Plot</Text>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.images2}
              source={require('../assets/language.png')}
            />
            <Text style={styles.text}>Language</Text>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <View style={styles.box}>
            <Image
              style={styles.images3}
              source={require('../assets/notification.png')}
            />
            <Text style={styles.text}>Notifications</Text>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.images4}
              source={require('../assets/payment.png')}
            />
            <Text style={styles.text}>Payment</Text>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <View style={styles.box}>
            <Image
              style={styles.images5}
              source={require('../assets/crop.png')}
            />
            <Text style={styles.text}>Crop stages and Report</Text>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.images6}
              source={require('../assets/download.png')}
            />
            <Text style={styles.text}>Download History</Text>
          </View>
        </View>
        <View style={styles.subcontainer}>
          <View style={styles.box}>
            <Image
              style={styles.images7}
              source={require('../assets/referal.png')}
            />
            <Text style={styles.text}>Referral</Text>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.images8}
              source={require('../assets/logout.png')}
            />
            <Text style={styles.text}>Logout</Text>
          </View>
        </View>
        <NavigationBar  />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topcontainer: {
    flex: 1,
    borderColor: '#65B741',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    paddingHorizontal: 45,
    // justifyContent: 'flex-start',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    color: '#65B741',
    fontSize: 15,
  },
  editprofile: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#65B741',
    margin: 10,
    width: 50,
    height: 50,
  },
  container: {
    margin: 10,
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    flex: 1,
    borderColor: '#65B741',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 7,
    marginVertical: 20,
    padding: 10,
    paddingHorizontal: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images1: {
    margin: 10,
    width: 60,
    height: 50,
  },
  images2: {
    margin: 10,
    width: 52,
    height: 50,
  },
  images3: {
    margin: 10,
    width: 50,
    height: 50,
  },
  images4: {
    margin: 10,
    width: 45,
    height: 50,
  },
  images5: {
    margin: 10,
    width: 55,
    height: 50,
  },
  images6: {
    margin: 10,
    width: 60,
    height: 50,
  },
  images7: {
    margin: 10,
    width: 50,
    height: 50,
  },
  images8: {
    margin: 10,
    width: 50,
  },

  text: {
    // fontSize: 20,
  },
});
