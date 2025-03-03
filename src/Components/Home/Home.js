import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Bg from "../../assets/BackG.jpg";

import MidCircleHome from './MidCircleHome';
import Quotes from './Quotes';
import DiaryIcon from './DiaryIcon';
import Rank from './Rank';

const Home = () => {
    return (  
        <View style={{ flex: 1, color: 'white'}}>
            <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
            <Quotes />
            <Rank />
            <MidCircleHome/> 
            <DiaryIcon />
         </View>     
    );
};

const styles = StyleSheet.create({
    backStyles: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
  
});

export default Home;
