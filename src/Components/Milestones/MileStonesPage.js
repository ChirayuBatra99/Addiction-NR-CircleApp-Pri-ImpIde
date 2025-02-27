import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import Bg from "../../assets/BackG.jpg";

const MileStonesPage = () => {
  return (
    <View style={{ flex: 1, color: 'white'}}>
      <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
      <Text>MileStonesPage</Text>
    </View>
  )
}

export default MileStonesPage

const styles = StyleSheet.create({
    backStyles: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
})