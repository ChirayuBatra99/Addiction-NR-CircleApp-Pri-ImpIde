import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

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
    }, []);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(prev => prev + 1);
                formatTime();
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    // const startTimer = async () => {
    //     await AsyncStorage.setItem('startTime', Date.now().toString());
    //     setIsRunning(true);
    // };

    // const stopTimer = async () => {
    //     await AsyncStorage.removeItem('startTime');
    //     setIsRunning(false);
    // };

    const resetTimer = async () => {
        await AsyncStorage.removeItem('startTime');
        setTime(0);
        await AsyncStorage.setItem('startTime', Date.now().toString());
    };

    function formatTime() {
        let days = Math.floor(time / (3600 * 24));
        let hours = Math.floor(time / 3600) % 24;
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        // Format to always show two digits
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        days = days < 10 ? `0${days}` : days;
        return `${days}:${hours}:${minutes}:${seconds}`;
    }

    function formatDays() {
        let days = Math.floor(time / (3600 * 24));
        days = days < 10 ? `0` : days;
        return days;
    }

    function formatHours() {
        let hours = Math.floor(time / 3600) % 24;
        hours = hours < 10 ? `0${hours}` : hours;
        return hours;
    }

    function formatMinutes() {
        let minutes = Math.floor((time % 3600) / 60);
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        return minutes;
    }

    function formatSeconds() {
        let seconds = time % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return seconds;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{formatTime()}</Text>
            <Button title="Reset" onPress={resetTimer} />
            <View style={styles.circle}>
                <Text style={styles.itHasBeen}>It has been</Text>
                <Text style={styles.daysCss}>{formatDays()} days</Text>
                <View style={styles.rowHMS}>
                    <View style={styles.rowOne}>
                        <Text style={styles.hsmDigits}>{formatHours()} </Text>
                        <Text style={styles.hsmTexts}>Hours</Text>
                    </View>
                    <View style={styles.rowTwo}>
                        <Text style={styles.hsmDigits}> {formatMinutes()} </Text>
                        <Text style={styles.hsmTexts}>Minutes</Text>
                    </View>
                    <View style={styles.rowThree}>
                        <Text style={styles.hsmDigits}> {formatSeconds()} </Text>
                        <Text style={styles.hsmTexts}>Seconds</Text>
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    hsmTexts:{
        fontSize: 13,
        fontWeight: 500
    },
    hsmDigits: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    daysCss: {
        fontSize: 45,
        fontWeight: 'bold',
    },
    rowOne: {
        alignItems: 'center',
        
    },
    rowTwo: {
        alignItems: 'center',
        marginHorizontal: '5%',
    },
    rowThree: {
        alignItems: 'center',

    },
    rowHMS: {
        marginBottom: '20%',
        display: 'flex',
        flexDirection: 'row'
    },  
    itHasBeen: {
        color: 'black',
        marginTop: '13%',
        fontSize: 33,
    },
    circle: {
        // backgroundColor: 'black',
        height: 300,
        width: 300,
        borderRadius: 200,
        // opacity: 0.3,
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'black',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    timerText: {
        fontSize: 40,
        marginBottom: 20,
    },
});

export default Home;





// const Home = () => {
//     const [startDate, setStartDate] = useState("");

//     const onReset = async () => {
//         try {
//             const using24HourFormat = await DeviceTimeFormat.is24HourFormat();
//             const val = moment(new Date()).format(using24HourFormat ? 'HH:mm' : 'h:mm A');

//             setStartDate(val);
//             await AsyncStorage.setItem('startTime', val);  // Save the updated value

//             Alert.alert("Start time saved:", val);
//         } catch (e) {
//             console.error("Error saving start time:", e);
//         }
//     };

//     return (
//         <View>
//             <CountDown
//                 until={100}
//                 onFinish={() => alert('finished')}
//                 onPress={() => alert('hello')}
//                 size={20}
//             />
//             <AnimatedCircularProgress
//                 size={220}
//                 width={20}
//                 fill={90}
//                 rotation={0}
//                 tintColor="#00e0ff"
//                 onAnimationComplete={() => console.log('onAnimationComplete')}
//                 backgroundColor="#3d5875"
//             />
//             <Button
//                 onPress={onReset}
//                 title="Reset"
//                 color="#841584"
//             />
//         </View>
//     );
// };

// export default Home;

// const styles = StyleSheet.create({
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//     },
// });
