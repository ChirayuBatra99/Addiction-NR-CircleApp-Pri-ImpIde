import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../Context/AppContext';

const TimePlate = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const {reset, setReset} = useContext(AppContext);

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
    }, [reset]);

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
        return `${days} : ${hours} : ${minutes} : ${seconds}`;
    }
    function formatDays() {
        let days = Math.floor(time / (3600 * 24));
        days = days < 10 ? days : days;
        return days;
    }

    function formatHours() {
        let hours = Math.floor(time / 3600) % 24;
        hours = hours < 10 ? `0${hours}` : hours;
        return hours;
    }

    function formatMinutes() {
        let minutes = Math.floor((time % 3600) / 60);
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        return minutes;
    }

    function formatSeconds() {
        let seconds = time % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return seconds;
    }

  return (
    <View style={styles.container}>
      <View style= {styles.bg}/>
      <View style={styles.onefour}>
         <Text style={styles.digitText}>{formatDays()} :</Text>
         <Text style={styles.underText}>Days</Text>
      </View>
      {/* <Text>:</Text> */}
      <View style={styles.onefour}>
         <Text style={styles.digitText}>{formatHours()} :</Text>
         <Text style={styles.underText}>Hours</Text>
      </View>
      {/* <Text>:</Text> */}
      <View style={styles.onefour}>
         <Text style={styles.digitText}>{formatMinutes()} :</Text>
         <Text style={styles.underText}>minutes</Text>
      </View>
      {/* <Text>:</Text> */}
      <View style={styles.onefour}>
         <Text style={styles.digitText}>{formatSeconds()} </Text>
         <Text style={styles.underText}>Seconds</Text>
      </View>
      
    </View>
  )
}

export default TimePlate;

const styles = StyleSheet.create({
    underText: {
        color: 'white',
    },
    digitText: {
        fontWeight: 700,
        fontSize: 30,
        padding: '1%',
        color: 'white',

    },
    onefour:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: '1%',
    },
    bg: {
        position: 'absolute',
        backgroundColor: 'black',
        height: '100%',
        width: '55%',
        opacity: 0.5,
        borderWidth: 2,
        borderRadius: 8,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.7,
        borderColor: 'white',
        borderRadius: 10,
        padding: 6,
        margin: '4%'
    },
})