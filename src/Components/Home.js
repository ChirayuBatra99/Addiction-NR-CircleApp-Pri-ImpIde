import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Bg from "../assets/BackG.jpg";

import MidCircleHome from './MidCircleHome';
import Quotes from './Quotes';

const Home = () => {
    return (  
        <View style={{ flex: 1}}>
            <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
            <Quotes />
             <MidCircleHome/> 

         </View>     
    );
};

const styles = StyleSheet.create({
    backStyles: {
        height: '100%',
        width: '100%',
        position: 'absolute',
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
