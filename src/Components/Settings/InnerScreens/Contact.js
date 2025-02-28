import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Bg from "../../../assets/BackG.jpg";
import Header from '../Header';
import Bmac from '../Bmac';

const Contact = () => {
  return (
      <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
            <Header />
             <Text style={styles.para}>
                            Hello I'm Chirayu Batra :) 
                            {"\n"}
                            {"\n"}
                            Email: chirayubatra1104@gmail.com
                            {"\n"}
                            {"\n"}            
                        </Text>

                        <Bmac />
      </View>
  )
}

export default Contact;

const styles = StyleSheet.create({
  para:{
    color: 'white',
    fontSize: 20,
    marginBottom: 210,
  },
  backStyles: {
    height: '100%',
    width: '100%',
    position: 'absolute',
},
})