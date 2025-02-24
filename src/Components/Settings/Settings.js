import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Bg from '../../assets/BackG.jpg';
import TodoApp from './TodoApp';

const Settings = () => {
  return (
      <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
            <TodoApp />
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