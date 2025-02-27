import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getMilestone } from '../Milestones/MileStone';

const Rank = () => {
    const [time, setTime] = useState(0);

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
    <View>
      <Text style={{color: 'white'}}>
        {getMilestone(formatDays())}
      </Text>
    </View>
  )
}

export default Rank;

const styles = StyleSheet.create({})




// days = days < 10 ? days : days;
