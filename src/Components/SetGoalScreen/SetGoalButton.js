import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SetGoalButton = ({days}) => {
    const navigation = useNavigation();
    const handleGoal = async() => {
        await AsyncStorage.removeItem('goalInStorage');
        await AsyncStorage.setItem('goalInStorage', days );
        navigation.navigate("goal");
    };
    return (
        <TouchableOpacity style={styles.button} onPress={handleGoal}>
            <Text style={styles.buttonText}>Set Goal</Text>
        </TouchableOpacity>
    )
}

export default SetGoalButton

const styles = StyleSheet.create({
    button: {
        // marginTop: '10%',
        backgroundColor: 'orange',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignSelf: 'center',
        width: '50%',
        marginBottom: '80%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    cont: {
        height: '10%',
        width: '10%',
    },
    container: {
        // : 'white',
        width: '80%',
        borderColor: 'orange',
        borderRadius: 52,
        height: '10%',

    }
})