import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getNextMilestone } from '../Milestones/MileStone';
// import Longest from './Longest';
import { AppContext } from '../Context/AppContext';
const { width } = Dimensions.get('window');

const GradientMatching = () => {
    const ls = AsyncStorage.getItem('longeststreak');
    const [goal, setGoal] = useState(1);
    const [time, setTime] = useState(0);
    const { reset, setReset } = useContext(AppContext);
    const [isRunning, setIsRunning] = useState(false);

    const [longest, setLongest] = useState(0);
    useEffect(() => {
        const fetchLongestStreak = async () => {
            const storedLongest = await AsyncStorage.getItem('longeststreak');
            setLongest(storedLongest ? parseInt(storedLongest) : 0);
        };
        fetchLongestStreak();
    }, [reset]);

    const Ls = async () => {
        return await AsyncStorage.getItem('longeststreak');
    }
    useEffect(() => {
        const getGoal = async () => {
            const getGoal = await AsyncStorage.getItem('goalInStorage');
            if (!getGoal)
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
    }, [reset]);

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
        <View style={{ marginTop: '6%' }}>
            <View style={styles.individualRow}>
                <View style={styles.miniCircleOuter} />
                <Text style={{ color: 'white', fontSize: 20 }}>Next Rank: </Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{formatDays()}/{getNextMilestone(formatDays())} ({Math.floor((time * 100) / (getNextMilestone(formatDays()) * 24 * 60 * 60))}%)</Text>
            </View>
            <View style={styles.individualRow}>
                <View style={styles.miniCircleMid} />
                <Text style={{ color: 'white', fontSize: 20 }}>Goal: </Text>
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{formatDays()}/{goal} ({Math.floor((time * 100) / (goal * 24 * 60 * 60))}%)</Text>
            </View>
            <View style={styles.individualRow}>
                <View style={styles.miniCircleInner} />
                <Text style={{ color: 'white', fontSize: 20 }}>Longest: </Text>
                {/* {Longest() ?
                     (<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{formatDays()}/{Longest()}  ({Math.floor((time * 100) / (Longest() * 24 * 60 * 60))})%</Text>)
                     : (<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>0 days</Text>)
                 } */}
                {/* {
                    // <Text>{Ls()}</Text>
                    parseInt(Ls()) ?
                    (<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{formatDays()}/{ parseInt(Ls()) }  ({Math.floor((time * 100) / (parseInt(Ls())  * 24 * 60 * 60))})%</Text>) :
                    (<Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>0 days</Text>)
                 } */}

                {
                    longest != 0 ?
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                            {formatDays()}/{longest} ({Math.floor((time * 100) / (longest * 24 * 60 * 60))}%)
                        </Text>
                        :
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                            0 days
                        </Text>

                }


            </View>
        </View>
    )
}

export default GradientMatching

const styles = StyleSheet.create({
    miniCircleOuter: {
        height: width < 380 ? 20 : 30,
        width: width < 380 ? 20 : 30,
        borderRadius: 20,
        backgroundColor: '#f25546',
        marginRight: '7%',
    },
    miniCircleMid: {
        height: width < 380 ? 20 : 30,
        width: width < 380 ? 20 : 30,
        borderRadius: 20,
        backgroundColor: '#c9c147',
        marginRight: '7%',
    },
    miniCircleInner: {
        height: width < 380 ? 20 : 30,
        width: width < 380 ? 20 : 30,
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