import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bg from '../../assets/BackG.jpg';

import Icon from 'react-native-vector-icons/AntDesign';

const Diary = () => {
  const [diary, setDiary] = useState('');
  const [diaryList, setDiaryList] = useState([]);

  useEffect(() => {
    const loadDiary = async () => {
      const storedDiary = await AsyncStorage.getItem('diaryList');
      if (storedDiary) {
        setDiaryList(JSON.parse(storedDiary));
      }
    };
    loadDiary();
  }, []);

  useEffect(() => {
    const saveDiary = async () => {
      await AsyncStorage.setItem('diaryList', JSON.stringify(diaryList));
    };
    saveDiary();
  }, [diaryList]);

  const addDiary = () => {
    if (diary.trim().length > 0) {
      const newDiary = {
        id: Date.now().toString(),
        text: diary,
        timestamp: new Date().toLocaleString(),
      };
      setDiaryList([...diaryList, newDiary]);
      setDiary('');
    }
  };

  const removeDiary = (id) => {
    setDiaryList(diaryList.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
        <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />
      <View style={styles.pad}>
        <Text style={styles.title}>My Diary</Text>
      </View>      

      <View style={{display: 'flex', flexDirection: 'row', alignItems:'center', marginBottom: 25}}>
              <TextInput
                style={styles.input}
                placeholder="Enter your thoughts"
        value={diary}
        onChangeText={(text) => setDiary(text)}
                placeholderTextColor='grey'
              />
              <Icon name="pluscircleo" size={40} color="white" onPress={addDiary} />
            </View>
 
      <FlatList
        data={diaryList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <View style={{width: '85%'}}>
              <Text style={styles.todoText}>{item.text}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
            <TouchableOpacity onPress={() => removeDiary(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pad: {
    borderRadius: 25,
    width: '70%',
    marginLeft: '15%',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 8,
  }, 
  container: {
    flex: 1,
  },
  backStyles: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: 'silver',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: '5%',
    marginLeft: '5%',
    borderRadius: 5,
    color: 'white',
    width: '70%',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginLeft: '10%',
  },
  todoText: {
    fontSize: 16,
    color: 'white',
  },
  timestamp: {
    color: '#888',
    fontSize: 12,
    color: 'white',
  },
  deleteText: {
    color: '#4ab59e',
  },
});

export default Diary;
