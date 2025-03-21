import React, { useState, useEffect, useContext } from 'react';
import {Dimensions, View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bg from "../../assets/BackG.jpg";

import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../Context/AppContext';
import CircularText from './CircularText';
import CircularTextSmallScreen from './CircularTextSmallScreen';
const { width } = Dimensions.get('window');


const MidCircleHome = () => {
    const [time, setTime] = useState(0);
    const { reset, setReset } = useContext(AppContext);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const loadStartTime = async () => {
            let startTime = await AsyncStorage.getItem('startTime');
            if (!startTime) { // Ensure startTime is set if it doesn't exist
                startTime = Date.now().toString();
                await AsyncStorage.setItem('startTime', startTime);
            }
            const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
            setTime(elapsed);
            setIsRunning(true);
        };
        
        loadStartTime();
    }, []);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
                // formatTime();
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const resetTimer = async () => {
        const longest = await AsyncStorage.getItem('longeststreak');
        const currentDays = await formatDays();
        if ( !longest || parseInt(longest) < currentDays) {
            await AsyncStorage.setItem('longeststreak', currentDays.toString());
        }
        await AsyncStorage.removeItem('startTime');
        setTime(0);
        await AsyncStorage.setItem('startTime', Date.now().toString());
        setReset(!reset);
    };

    // useEffect(() => {
    //     const checkAndUpdateStreak = async () => {
    //         setTimeout(async () => {
    //             const longest = await AsyncStorage.getItem('longeststreak');
    //             const currentDays = formatDays();
                
    //             if (!longest || parseInt(longest) < currentDays) {
    //                 await AsyncStorage.setItem('longeststreak', currentDays.toString());
    //             }
    //         }, 86400000); // 24 hours delay
    //     };
    
    //     checkAndUpdateStreak();
    // }, [reset]);
    

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
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.circle}>
                    <View style={styles.circleTwo} />
                    <Text style={styles.itHasBeen}>It has been</Text>
                    <Text style={styles.daysCss}>{formatDays()} days</Text>
                    <View style={styles.rowHMS}>
                        <View style={styles.rowOne}>
                            <Text style={styles.hsmDigits}>{formatHours()} </Text>
                            <Text style={styles.hsmTexts}>Hours</Text>
                        </View>
                        <View style={styles.rowTwo}>
                            <Text style={styles.hsmDigits}> {formatMinutes()} </Text>
                            <Text style={styles.hsmTexts}>Minutes</Text>
                        </View>
                        <View style={styles.rowThree}>
                            <Text style={styles.hsmDigits}> {formatSeconds()} </Text>
                            <Text style={styles.hsmTexts}>Seconds</Text>
                        </View>
                    </View>
                    { 
                        width>380 ?
                        <CircularText text="OFF ADDICTION" radius={150} />  :
                        <CircularTextSmallScreen text="OFF ADDICTION" radius={98} />
                    }
                    {/* <Text style={styles.offAddiction}>OFF Addiction</Text> */}
                    <TouchableOpacity onPress={resetTimer} style={styles.touchOpacContainer}>
                        <Icon name="reload-outline" size={width<380?30:40} color="white" style={styles.resetIconStyles} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    offAddiction: {
        color: 'white',
        position: 'absolute',
        bottom: '6%',
    },
    touchOpacContainer: {
        left: '38%',     // To This
        bottom: '8%',      // To This
    },
    resetIconStyles: {
        backgroundColor: 'red',
        borderRadius: 50,
        overflow: 'hidden',
        padding: 5,
        position: 'relative',
        // left: '38%',     // This
        // bottom: '8%',    // This
    },
    backStyles: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    mainContainer: {
        flex: 1,
        marginTop: '-25%'
        // position: 'absolute'
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    hsmTexts: {
        fontSize: 13,
        fontWeight: 500,
        color: 'white'

    },
    hsmDigits: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'

    },
    daysCss: {
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white'

    },
    rowOne: {
        alignItems: 'center',
        color: 'white'

    },
    rowTwo: {
        alignItems: 'center',
        marginHorizontal: '5%',
    },
    rowThree: {
        alignItems: 'center',

    },
    rowHMS: {
        marginBottom: '-5%',
        display: 'flex',
        flexDirection: 'row',
        color: 'white'

    },
    itHasBeen: {
        color: 'white',
        marginTop: '13%',
        fontSize: 33,

    },
    circle: {
        height: width<380?220:300,
        width: width<380?220:300,
        borderRadius: 200,
        // opacity: 0.3,
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'grey'
        // position: 'relative'
    },
    circleTwo: {
        height: width<380?220:300,
        width: width<380?220:300,
        overflow: 'hidden',
        borderWidth: 2,
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.1,
        borderRadius: 200,
        color: 'white'

    },
    timerText: {
        fontSize: 40,
        marginBottom: 20,
    },
});

export default MidCircleHome;
