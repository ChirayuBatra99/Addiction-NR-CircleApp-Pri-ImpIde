import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TimerDials = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const loadStartTime = async () => {
            const startTime = await AsyncStorage.getItem('startTime');
            if (startTime) {
                const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
                setTime(elapsed);
                setIsRunning(true);
            }
        };
        loadStartTime();
    }, []);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
                formatTime();
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const resetTimer = async () => {
        await AsyncStorage.removeItem('startTime');
        setTime(0);
        await AsyncStorage.setItem('startTime', Date.now().toString());
    };

function formatTime() {
    let days = Math.floor(time/ (3600*24));
    let hours = Math.floor(time / 3600) %24;
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;
    
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    days = days<10 ? `0${days}` : days;
    return `${days}:${hours}:${minutes}:${seconds}`;
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime() }</Text>
      <Button title="Reset" onPress={resetTimer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 40,
    marginBottom: 20,
  },
});

export default TimerDials;
