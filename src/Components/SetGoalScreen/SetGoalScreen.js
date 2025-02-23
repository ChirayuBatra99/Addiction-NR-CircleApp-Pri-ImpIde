import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import Bg from '../../assets/BackG.jpg';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import SetGoalButton from './SetGoalButton';

const SetGoalScreen = () => {
    const [targetDays, setTargetDays] = useState(0);
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
            <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
            <Text style={styles.topText}>Set your abstainance goal</Text>
            <TextInput
                value={targetDays}
                placeholder='Enter in days'
                keyboardType='numeric'
                onChangeText={setTargetDays}
                style={styles.inputDays}
                placeholderTextColor="#b5b1ac"
            />
            <SetGoalButton days={targetDays}/>
        </View>
  )
}

export default SetGoalScreen;

const styles = StyleSheet.create({
    inputDays: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: '80%',
        fontSize: 18,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: '10%',
    },
    topText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: '60%',
    },
    backStyles: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
})
