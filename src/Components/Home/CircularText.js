import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CircularText = ({ text, radius }) => {
    const characters = text.split("");
    const angleIncrement = 57 / characters.length; // Adjust spread along the circle

    return (
        <View style={styles.curvedTextContainer}>
            {characters.map((char, index) => {
                const angle = 25 - index * angleIncrement; // Start from top center
                return (
                    <Text
                        key={index}
                        style={[
                            styles.letter,
                            {
                                transform: [
                                    { rotate: `${angle}deg` },
                                    { translateY: radius-15 }, // Move outward
                                    // { rotate: `${-angle}deg` }, // Revert text orientation
                                ],
                            },
                        ]}
                    >
                        {char}
                    </Text>
                );
            })}
        </View>
    );
};

export default CircularText

const styles = StyleSheet.create({

curvedTextContainer: {
    position: "absolute",
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
},

letter: {
    position: "absolute",
    fontSize: 17,
    fontWeight: "bold",
    color: "silver",
},

})