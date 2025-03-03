import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Iconi from 'react-native-vector-icons/FontAwesome6';

import { useNavigation } from '@react-navigation/native';

const DiaryIcon = () => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <Iconi name="book-journal-whills" size={50} color="white" style={styles.resetIconStyles} onPress={() => navigation.navigate("diary")}/>
                <Text style={styles.textDiary}>Diary</Text>
            </View>
            <View style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <Icon name="list-circle-outline" size={50} color="white" style={styles.resetIconStyles} onPress={() => navigation.navigate("todo")}/>
                <Text style={styles.textDiary}>To-Do List</Text>
            </View>

        </TouchableOpacity>
    )
}

export default DiaryIcon

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: '25%',
        paddingTop: '80%',
        paddingHorizontal: '20%',
    },
    circle: {
        position: 'absolute',
        height: 150,
        width: 10,
        backgroundColor: 'green'
    },
    textDiary: {
        color: 'white',
    }
})