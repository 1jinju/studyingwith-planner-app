import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
        <View style={styles.completeCircle}>
            <Ionicons name="checkmark-circle" size={40} color="black" />
        </View>) : (
            <View style={styles.circle} />
        )}
      </TouchableOpacity>
      <Text style={[styles.text, checked? styles.strikeText: styles.unstrikeText,]}>{textValue}</Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={{marginLeft: 15, marginRight: 15}} onPress={onRemove(id)}>
            <AntDesign name="delete" size={30} color="#e33057" />
        </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },

  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
completeCircle: {
    marginLeft: 20, 
    marginRight: 15,
},
  circle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
});

export default TodoListItem;