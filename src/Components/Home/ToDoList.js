import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Bg from '../../assets/BackG.jpg';

import Icon from 'react-native-vector-icons/AntDesign';

const ToDoList = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  // Load todos from AsyncStorage when the app loads
  useEffect(() => {
    const loadTodos = async () => {
      const storedTodos = await AsyncStorage.getItem('todoList');
      if (storedTodos) {
        setTodoList(JSON.parse(storedTodos));
      }
    };
    loadTodos();
  }, []);

  // Save todos to AsyncStorage whenever the todoList changes
  useEffect(() => {
    const saveTodos = async () => {
      await AsyncStorage.setItem('todoList', JSON.stringify(todoList));
    };
    saveTodos();
  }, [todoList]);

  const addTodo = () => {
    if (todo.trim().length > 0) {
      const newTodo = {
        id: Date.now().toString(),
        text: todo,
        timestamp: new Date().toLocaleString(),
      };
      setTodoList([...todoList, newTodo]);
      setTodo('');
    }
  };

  const removeTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Image source={Bg} alt="kajesdbc" style={styles.backStyles} />

 <View style={styles.pad}>
      <Text style={styles.title}>Todo List</Text>
      </View>      

      <View style={{display: 'flex', flexDirection: 'row', alignItems:'center', marginBottom: 25}}>
        <TextInput
          style={styles.input}
          placeholder="Enter a todo.."
          value={todo}
          onChangeText={(text) => setTodo(text)}
          placeholderTextColor='grey'
        />
        <Icon name="pluscircleo" size={40} color="white" onPress={addTodo} />
        {/* <Button title="Add Todo" onPress={addTodo} /> */}
      </View>


      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <View>
              <Text style={styles.todoText}>{item.text}</Text>
              {/* <Text style={styles.timestamp}>{item.timestamp}</Text> */}
            </View>
            <TouchableOpacity onPress={() => removeTodo(item.id)}>
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
    // padding: 20,
    // backgroundColor: 'yellow',
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
    // marginBottom: 10,
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

export default ToDoList;
