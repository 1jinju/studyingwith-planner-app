//import { useNavigation } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/native';
import React, {useState, Component} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import { auth } from '../firebase'
import moment from 'moment';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { Ionicons } from '@expo/vector-icons';
//import {DrawerActions} from 'react-navigation-drawer';

const nowTime = moment().format('YYYY.MM.DD');

const Home = ({navigation}) => {
  const navigations = useNavigation()
  
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
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
        <Ionicons name="menu" size={25} color="#5D5D5D" onPress={()=>DrawerActions.openDrawer()}/>
      </View>        
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Text style={{marginTop: 10, marginLeft: 10, alignContent: 'flex-start', fontSize:27, paddingTop: 20, paddingLeft: 10}}>{nowTime}</Text>
        {/*<Text style={{marginTop: 10, marginLeft: 10, fontSize:27, padding: 10}}>시간!</Text>*/}
      </View>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
      {/*<TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>*/}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
    marginTop: 25,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});