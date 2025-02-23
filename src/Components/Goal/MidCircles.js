import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MidCircles = () => {
    const [targetDayz, setTargetDayz] = useState(0);

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
                fill={90}
                rotation={0}
                lineCap='round'
                tintColor="#98ab82"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />
            <AnimatedCircularProgress
                style={styles.mid}
                size={260}
                width={30}
                fill={90}
                rotation={0}
                lineCap='round'
                tintColor="#bf4747"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />
            <AnimatedCircularProgress
                style={styles.inner}
                size={190}
                width={30}
                fill={90}
                lineCap='round'
                rotation={0}
                tintColor="#6cb522"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />
            {/* <Text style={{color: 'white'}}>{targetDayz}</Text> */}
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