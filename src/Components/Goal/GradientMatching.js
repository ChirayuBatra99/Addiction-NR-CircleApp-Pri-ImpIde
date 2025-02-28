import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getNextMilestone } from '../Milestones/MileStone';
import Longest from './Longest';
const GradientMatching = () => {
    const [goal, setGoal] = useState(1);
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
    <View style={{marginTop: '6%'}}>
      <View style={styles.individualRow}>
            <View style={styles.miniCircleOuter}/>
            <Text style={{color: 'white', fontSize: 20}}>Next Rank: </Text>
            {/* <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{formatDays()}/{goal} ({Math.floor((time*100)/(goal*24*60*60)) }%)</Text> */}
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{formatDays()}/{getNextMilestone(formatDays())} ({Math.floor((time*100)/(getNextMilestone(formatDays())*24*60*60)) }%)</Text>

      </View>
      <View style={styles.individualRow}>
            <View style={styles.miniCircleMid}/>
            <Text style={{color: 'white', fontSize: 20}}>Goal: </Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{formatDays()}/{goal} ({Math.floor((time*100)/(goal*24*60*60)) }%)</Text>
      </View>
      <View style={styles.individualRow}>
            <View style={styles.miniCircleInner}/>
            <Text style={{color: 'white', fontSize: 20}}>Longest: </Text>
            { Longest() ?
            (<Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{formatDays()}/{Longest()}  ({Math.floor((time*100)/(Longest()*24*60*60))})%</Text>)
            : (<Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>0 days</Text>)
}
      </View>
    </View>
  )
}

export default GradientMatching

const styles = StyleSheet.create({
    miniCircleOuter: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: '#f25546',
        marginRight: '7%',  
    },
    miniCircleMid: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: '#c9c147',
        marginRight: '7%',  
    },
    miniCircleInner: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: '#0eb8e3',
        marginRight: '7%',  
    },
    individualRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '1.5%',

    }
})