import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../Context/AppContext';

const Longest = () => {
    const [longestDays, setLongestDays] = useState(0);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const {reset, setReset} = useContext(AppContext);

    useEffect(() => {
        const checkLongest = async () => {
            const isLongestThere = await AsyncStorage.getItem('longeststreak');
            if (isLongestThere !== null) {
                setLongestDays(parseInt(isLongestThere));
            } else {
                await AsyncStorage.setItem('longeststreak', '0');
                setLongestDays(0);
            }
        };
        checkLongest();
    }, [reset]);

    
//   return longestDays;
        <View>
            <Text>{longestDays}</Text>
        </View>
}

export default Longest

const styles = StyleSheet.create({})