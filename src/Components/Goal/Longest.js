import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../Context/AppContext';

const Longest = () => {
    const [longestDays, setLongestDays] = useState();
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const {reset, setReset} = useContext(AppContext);

    useEffect(() => {
        const checkLongest = async () => {
            const isLongestThere = await AsyncStorage.getItem('longeststreak');
            if (isLongestThere === null) {  // Check if it's not set
                setLongestDays(0);
                await AsyncStorage.setItem('longeststreak', '0');
            } else {
                setLongestDays(parseInt(isLongestThere));
            }
        }
        checkLongest();
    }, []);

    // useEffect(() => {
    //     const loadStartTime = async () => {
    //         const startTime = await AsyncStorage.getItem('startTime');
    //         if (startTime) {
    //             const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
    //             setTime(elapsed);
    //             setIsRunning(true);
    //         }
    //     };
    //     loadStartTime();
    // }, [reset]);

    // function formatDays() {
    //     let days = Math.floor(time / (3600 * 24));
    //     days = days < 10 ? days : days;
    //     return days;
    // }

  
// useEffect(() => {
//     const checkLongest = async () => {
//         const isLongestThere = await AsyncStorage.getItem('longeststreak');
//         const longest = parseInt(isLongestThere);
//         if (formatDays() > longest) {
//             await AsyncStorage.setItem('longeststreak', formatDays().toString());
//             setLongestDays(formatDays());
//         }
//     }
//     checkLongest();
// }, [time]);

  return longestDays;
}

export default Longest

const styles = StyleSheet.create({})