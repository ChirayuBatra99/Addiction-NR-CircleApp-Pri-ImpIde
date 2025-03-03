import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pad}>
        <Text style={styles.appName}>Better Self </Text>
        <Text style={styles.desc}>Keep track of your addictions like Social Media, Vape, Smoking, etc. Write your journal, and follow your to-do list.
          Become better everyday.
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  desc: {
    color: 'pink',
    fontSize: 18,
  },
  pad: {
    backgroundColor: 'brown',
    padding: '5%',
    borderRadius: 25,
    width: '70%',
    borderColor: 'yellow',
    borderWidth: 1,
  },  
  container: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
