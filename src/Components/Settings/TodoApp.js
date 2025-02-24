import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoApp = () => {
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
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a todo"
        value={todo}
        onChangeText={(text) => setTodo(text)}
        placeholderTextColor='white'
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <View>
              <Text style={styles.todoText}>{item.text}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
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
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'yellow',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    
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
    color: 'white',
  },
});

export default TodoApp;
