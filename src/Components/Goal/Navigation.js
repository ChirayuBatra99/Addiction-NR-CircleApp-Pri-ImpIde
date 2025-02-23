import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Goal from './Goal';
import SetGoalScreen from '../SetGoalScreen/SetGoalScreen';

const Navigation = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name="goal" component={Goal} options={{ headerShown: false }} />
            <Stack.Screen name="setgoal" component={SetGoalScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})