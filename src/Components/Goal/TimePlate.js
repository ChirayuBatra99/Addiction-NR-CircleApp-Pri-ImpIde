import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TimePlate = () => {
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

    function formatTime() {
        let days = Math.floor(time / (3600 * 24));
        let hours = Math.floor(time / 3600) % 24;
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        // Format to always show two digits
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        days = days < 10 ? `0${days}` : days;
        return `${days}:${hours}:${minutes}:${seconds}`;
    }

  return (
    <View>
      <Text>{formatTime()}</Text>
    </View>
  )
}

export default TimePlate;

const styles = StyleSheet.create({})