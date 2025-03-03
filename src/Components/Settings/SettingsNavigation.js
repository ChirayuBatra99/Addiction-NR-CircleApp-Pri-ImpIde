import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Settings from './Settings';
import AboutUs from './InnerScreens/AboutUs';
import Contact from './InnerScreens/Contact';

const SettingsNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="settings" component={Settings} options={{headerShown: false}} />
        <Stack.Screen name="aboutus" component={AboutUs} options={{headerShown: false}} />
        <Stack.Screen name="contact" component={Contact} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default SettingsNavigation

const styles = StyleSheet.create({})