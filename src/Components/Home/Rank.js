import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import { getMilestone } from '../Milestones/MileStone';

const Rank = () => {
    const [time, setTime] = useState(0);
    const navigation = useNavigation();

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
        const interval = setInterval(loadStartTime, 3000);
    }, []);

    function formatDays() {
        let days = Math.floor(time / (3600 * 24));
        return days;
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("milestones") }>
            <View style={styles.plate} >
                <View style={styles.rankContainer}>
                    <Text style={styles.rankText}>Rank</Text>
                    <Icon name="infocirlceo" size={20} color="white" style={styles.resetIconStyles} />
                </View>
                <Text style={styles.myRank}>
                    "{getMilestone(formatDays())}"
                </Text>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    myRank: {
        color: '#e1ff00',
        fontSize: 25,

    },
    rankContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rankText: {
        color: 'white',
        fontSize: 18,
        marginRight: '4%',
        fontWeight: 600,
        fontStyle: 'italic',
    },
    plate: {
        height: '30%',
        width: '40%',
        backgroundColor: '#7a181c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 20,
        padding: '1%',
        borderColor: 'white',
        borderWidth: 1,
    },
    container: {
        alignItems: 'center'
    }
})

export default Rank;




// days = days < 10 ? days : days;
