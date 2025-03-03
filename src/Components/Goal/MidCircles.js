import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../Context/AppContext';

import { getNextMilestone } from '../Milestones/MileStone';
import Longest from './Longest';

const MidCircles = () => {
    const [targetDayz, setTargetDayz] = useState(0);
    const {reset, setReset} = useContext(AppContext);

    const [goal, setGoal] = useState(0);
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const getGoal = async () => {
            const getGoal = await AsyncStorage.getItem('goalInStorage');
            if(!getGoal)
                setGoal(1);
            else
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
    },[reset]);
    
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

    useEffect(() => {
        const targetDays = AsyncStorage.getItem('goalInStorage');
        setTargetDayz(targetDays);
    }, []);
    
    return (
        <View style={styles.plate}>
            <AnimatedCircularProgress
                style={styles.outer}
                size={330}
                width={30}
                fill={Math.floor((time*100)/(getNextMilestone(formatDays())*24*60*60)) == 0 ? 0.2 : Math.floor((time*100)/(getNextMilestone(formatDays())*24*60*60)) }
                rotation={0}
                lineCap='round'
                tintColor="#f25546"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />
            <AnimatedCircularProgress
                style={styles.mid}
                size={260}
                width={30}
                fill={Math.floor((time*100)/(goal*24*60*60)) ==0 ? 0.1 : Math.floor((time*100)/(goal*24*60*60))}
                rotation={0}
                lineCap='round'
                tintColor="#c9c147"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />
            <AnimatedCircularProgress
                style={styles.inner}
                size={190}
                width={30}
                fill={Math.floor((time*100)/(Longest()*24*60*60))}
                // fill={Math.floor((time*100)/(Longest()*24*60*60))>100 ? 0.1 : Math.floor((time*100)/(Longest()*24*60*60))}
                lineCap='round'
                rotation={0}
                tintColor="#0eb8e3"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />
        </View>
    )
}

export default MidCircles

const styles = StyleSheet.create({
    inner: {
        position: 'absolute',
    },
    mid: {
        position: 'absolute',
    },
    outer: {

    },
    plate: {
        position: 'relative',
        // flex: 1,                Important change
        alignItems: 'center',
        justifyContent: 'center'
    },

})