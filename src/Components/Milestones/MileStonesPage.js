import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bg from "../../assets/BackG.jpg";
import { milestones } from './MileStone';  // Adjust this import path

const MileStonesPage = () => {
    const [days, setDays] = useState(0);

    const formatDays = (time) => {
        return Math.floor(time / (3600 * 24));
    };

    useEffect(() => {
        const loadStartTime = async () => {
            const startTime = await AsyncStorage.getItem('startTime');
            if (startTime) {
                const elapsed = Math.floor((Date.now() - parseInt(startTime)) / 1000);
                setDays(formatDays(elapsed));
            }
        };
        loadStartTime();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.milestoneItem}>
            <Text style={[styles.milestoneText, days >= item.day ? styles.achieved : null]}>
                {days >= item.day ? '✓ ' : '○ '}
                {item.title}
            </Text>
            <Text style={[styles.milestoneText, days >= item.day ? styles.achieved : null]}>
             {item.day} Days
            </Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <Image source={Bg} style={styles.backStyles} />
            <View style={styles.content}>
                <Text style={styles.title}>Milestones</Text>
                <FlatList
                    data={milestones}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.day.toString()}
                />
            </View>
        </View>
    );
};

export default MileStonesPage;

const styles = StyleSheet.create({
    backStyles: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    milestoneItem: {
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBlockColor: 'grey'
    },
    milestoneText: {
        fontSize: 20,
        color: 'white',
    },
    achieved: {
        color: 'lightgreen',
    },
});