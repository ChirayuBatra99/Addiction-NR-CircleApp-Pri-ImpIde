import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Bg from '../../assets/BackG.jpg';
import Header from './Header';
import OptionsList from './OptionsList';
import Bmac from './Bmac';

const Settings = () => {
  return (
      <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
            <Header />
            <OptionsList />
            <Bmac />
      </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  backStyles: {
    height: '100%',
    width: '100%',
    position: 'absolute',
},
})