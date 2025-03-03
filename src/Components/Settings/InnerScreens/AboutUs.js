import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Bg from "../../../assets/BackG.jpg";
import Header from '../Header';
import Bmac from '../Bmac';

const AboutUs = () => {
  return (
      <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
            <Header />
            <Text style={styles.para}>
                -Hello I'm Chirayu Batra :) {"\n"}
                a software developer, here to apply my knowledge on making applications that can be helpful to people.
                {"\n"}{"\n"}
            </Text>
            <Bmac />
      </View>
  )
}

export default AboutUs;

const styles = StyleSheet.create({
  para:{
    color: 'white',
    fontSize: 20,
    padding: '10%',
  },
  backStyles: {
    height: '100%',
    width: '100%',
    position: 'absolute',
},
})