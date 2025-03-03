import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CircularText = ({ text, radius }) => {
    const characters = text.split("");
    const angleIncrement = 57 / characters.length; 

    return (
        <View style={styles.curvedTextContainer}>
            {characters.map((char, index) => {
                const angle = 25 - index * angleIncrement; 
                return (
                    <Text
                        key={index}
                        style={[
                            styles.letter,
                            {
                                transform: [
                                    { rotate: `${angle}deg` },
                                    { translateY: radius-15 }, 
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