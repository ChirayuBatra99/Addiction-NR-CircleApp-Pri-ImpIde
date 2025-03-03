import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const SetGoalButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("setgoal")}>
            <Text style={styles.buttonText}>Set Goal</Text>
        </TouchableOpacity>
    )
}

export default SetGoalButton

const styles = StyleSheet.create({
    button: {
        marginTop: '10%',
        backgroundColor: 'orange',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignSelf: 'center',
        width: '80%',
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
        width: '80%',
        borderColor: 'orange',
        borderRadius: 52,
        height: '10%',

    }
})