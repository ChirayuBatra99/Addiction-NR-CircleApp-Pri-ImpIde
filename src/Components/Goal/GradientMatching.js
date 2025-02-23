import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GradientMatching = () => {
    const [goal, setGoal] = useState(0);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const getGoal = async() => {
            const getGoal = await AsyncStorage.getItem('goalInStorage');
            setGoal(getGoal);
        }
        getGoal();
        const loadStartTime = async () => {
            const startTime = await AsyncStorage.getItem('startTime');
            if (startTime) {
                const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
                setTime(elapsed);
                setIsRunning(true);
            }
        };
        loadStartTime();
    },[]);
    
      useEffect(() => {
               let interval;
               if (isRunning) {
                   interval = setInterval(() => {
                       setTime(prev => prev + 1);
                   }, 1000);
               }
               return () => clearInterval(interval);
           }, [isRunning]);

    function formatDays() {
        let days = Math.floor(time / (3600 * 24));
        days = days < 10 ? days : days;
        return days;
    }

  return (
    <View>
      <View style={styles.individualRow}>
            <View style={styles.miniCircle}/>
            <Text style={{color: 'white'}}>Next MileStone:</Text>
      </View>
      <View style={styles.individualRow}>
            <View style={styles.miniCircle}/>
            <Text style={{color: 'white', fontSize: 20}}>Goal: </Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{formatDays()}/{goal} ({Math.floor((time*100)/(goal*24*60*60)) }%)</Text>
      </View>
      <View style={styles.individualRow}>
            <View style={styles.miniCircle}/>
            <Text style={{color: 'white'}}>XYXnaldknf</Text>
      </View>
    </View>
  )
}

export default GradientMatching

const styles = StyleSheet.create({
    miniCircle: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: 'green',
        marginRight: '7%',
    },
    individualRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '1.5%',

    }
})