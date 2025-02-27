import { StyleSheet, Text, View } from 'react-native'
import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './Home';
import Diary from './Diary';
import ToDoList from './ToDoList';
import MileStonesPage from '../Milestones/MileStonesPage';

const HomeNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="diary" component={Diary} options={{ headerShown: false }} />
            <Stack.Screen name="todo" component={ToDoList} options={{ headerShown: false}} />
            <Stack.Screen name="milestones" component={MileStonesPage} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default HomeNavigation

const styles = StyleSheet.create({})