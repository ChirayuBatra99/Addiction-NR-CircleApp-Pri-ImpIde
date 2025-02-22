import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { AnimatedCircularProgress } from 'react-native-circular-progress';


const MidCircles = () => {
    return (
        <View style={styles.plate}>
            <AnimatedCircularProgress
                style={styles.outer}
                size={200}
                width={15}
                fill={90}
                rotation={0}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />
            <AnimatedCircularProgress
                style={styles.mid}
                size={120}
                width={15}
                fill={90}
                rotation={0}
                tintColor="#00e0ff"
                onAnimationComplete={() => console.log('onAnimationComplete')}
                backgroundColor="#3d5875" />
            <AnimatedCircularProgress
                style={styles.inner}
                size={80}
                width={15}
                fill={90}
                rotation={0}
                tintColor="#00e0ff"
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
        position: 'relative' ,
        // flex: 1,                Important change
        alignItems: 'center',
        justifyContent: 'center'
    },

})