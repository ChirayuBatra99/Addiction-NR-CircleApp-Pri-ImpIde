import {Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
const { width } = Dimensions.get('window');

const CircularTextSmallScreen = ({ text, radius }) => {
    const characters = text.split("");
    const angleIncrement = 100 / characters.length; 

    return (
        <View style={styles.curvedTextContainer}>
            <Text style={styles.letter}>OFF ADDICTION</Text>
            {/* {characters.map((char, index) => {
                const angle = 45 - index * angleIncrement; 
                return (
                    <Text
                        key={index}
                        style={[
                            styles.letter,
                            {
                                transform: [
                                    { rotate: `${angle}deg` },
                                    { translateY: radius-14 }, 
                                ],
                            },
                        ]}
                    >
                        {char}
                    </Text>
                );
            })} */}
        </View>
    );
};

export default CircularTextSmallScreen;

const styles = StyleSheet.create({
curvedTextContainer: {
    position: "absolute",
    width: 300,
    height: 455,
    alignItems: "center",
    justifyContent: "center",
},

letter: {
    position: "absolute",
    fontSize: 17,
    fontWeight: "bold",
    color: "silver",
},
});