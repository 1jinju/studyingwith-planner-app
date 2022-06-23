import { useNavigation } from '@react-navigation/core'
import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';

function Statistics ({navigation}) {

  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };
  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ()=>
      <View style={{flexDirection:'row', paddingRight:20}}>
        <Ionicons name="search" size={25} color="#5D5D5D" style={{paddingRight:20}} onPress={()=>navigation.navigate('Search')} />
        <Ionicons name="person-circle" size={25} color="#5D5D5D" style={{paddingRight:20}} onPress={()=>navigation.navigate('Follow')} />
        <Ionicons name="notifications" size={25} color="#5D5D5D" style={{paddingRight:20}} onPress={()=>navigation.navigate('Notification')} />
        <Ionicons name="menu" size={25} color="#5D5D5D" onPress={()=>navigation.navigate('')}/>
      </View>        
    });
  }, []);

  return (
      <View>
        <View>
          <Calendar onDayPress={day => {console.log('selected day', day);}}
            theme={{
              selectedDayBackgroundColor: '#0782F9',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#0782F9',
              arrowColor: '#0782F9',
              disabledArrowColor: '#d9e1e8',
              indicatorColor: '#0782F9',
              textDayFontWeight: '300',
              textDayHeaderFontWeight: '300',
            }}
        />
        </View>
          <View style={styles.card}>
            <ScrollView>
              <TodoInsert onAddTodo={addTodo} />
              <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
            </ScrollView>
          </View>
      </View>
  )
}

export default Statistics

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 600,
  },
})

