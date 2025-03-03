import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pad}>
        <Text style={styles.appName}>Self Improvement & Quit your Addiction </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  pad: {
    backgroundColor: 'brown',
    padding: '5%',
    borderRadius: 25,
    width: '70%',
    borderColor: 'yellow',
    borderWidth: 1,
  },  
  container: {
    height: '20%',
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
