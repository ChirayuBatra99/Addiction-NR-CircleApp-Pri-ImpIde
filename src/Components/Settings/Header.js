import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('./path/to/logo.png')} // Add your logo's path here
        style={styles.logo}
      /> */}
      <Text style={styles.appName}>App Name</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: '20%',
    // backgroundColor: '#f8f8f8',
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
