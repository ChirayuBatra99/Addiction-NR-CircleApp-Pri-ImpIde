import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'

import Bg from '../../assets/BackG.jpg';
import MidCircles from './MidCircles';
import TimePlate from './TimePlate';
import SetGoalButton from './SetGoalButton';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Goal = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
            <TimePlate />
            <MidCircles />
            <SetGoalButton />
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