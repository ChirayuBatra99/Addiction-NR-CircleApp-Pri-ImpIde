import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'

import Bg from '../../assets/BackG.jpg';
import MidCircles from './MidCircles';
import TimePlate from './TimePlate';

const Goal = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
            <TimePlate />
            <MidCircles />
        </View>
    )
}

export default Goal

const styles = StyleSheet.create({
    backStyles: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
})