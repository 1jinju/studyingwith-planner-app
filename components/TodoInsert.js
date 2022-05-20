import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TodoInsert = ({onAddTodo}) => {
    const [newTodoItem, setNewTodoItem] = useState('');
    
    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };
    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        onChangeText={todoInputHandler}
        value={newTodoItem}
        autoCorrect={false}
      />
      <View style={styles.text}>
        <Text onPress={addTodoHandler}><Ionicons name="add-circle" size={45} color='#0782F9'/></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 20,
    marginLeft: 15,
  },
  text: {
    marginRight: 5,
  },
});

export default TodoInsert;