//import { useNavigation } from '@react-navigation/core'
import { useNavigation } from '@react-navigation/native';
import React, {useState, Component} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, TouchableHighlight } from 'react-native'
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
        <Ionicons name="menu" size={25} color="#5D5D5D" onPress={()=>navigation.navigate('Menu')}/>
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
        <ScrollView>
          <TodoInsert onAddTodo={addTodo} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </ScrollView>
      </View>
      <View style={styles.card}>
        <ScrollView horizontal={false} style={styles.list}>
          <View style={styles.stylegridView}>
          <Text>06</Text>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>07</Text>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>08</Text>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>09</Text>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>10</Text>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>11</Text>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>12</Text>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>13</Text>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>14</Text>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
            <Text>          </Text>
          </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>15</Text>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
          </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>16</Text>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
          </View>
          
          <View style={styles.stylegridView}>
          <Text>17</Text>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.stylegridView}>
          <Text>18</Text>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(0,0,0,0)" style={styles.item}>
              <Text>          </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
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
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10, // to provide rounded corners
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
  stylegridView:{
    flexDirection:"row",
    flexWrap:"wrap",
    paddingHorizontal: 30,
    paddingTop:10,
    justifyContent:"space-between",
  },
  list:{
    flex: 1,
    width:"100%",
    //backgroundColor:"#f2f2f2",
  },
  item:{
    border: 1,
    backgroundColor:"#f2f2f2",

  },
  /*select1:{
    backgroundColor:"#fFD732",
  },
  select2:{
    backgroundColor:"#FAD291",
  },*/
});