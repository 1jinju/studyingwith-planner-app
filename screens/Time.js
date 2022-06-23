import { useNavigation } from '@react-navigation/core'
import * as React from 'react';
import { Component, useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

const nowTime = moment().format('YYYY.MM.DD');

const Time = ({navigation}) => {

  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);

  toggleStopwatch = () => {
    setStart(!start);
    setReset(false);
  }

  resetStopwatch = () => {
    setStart(false);
    setReset(true);
  }
  
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
    <View style={options.view}>
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 160}}>
        <Stopwatch laps msecs  start={start}
          reset={reset}
          options={options}
          getTime={(time) => {}} />
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={toggleStopwatch}>
            <Text>{!start ? 
              (<Ionicons name="caret-forward-circle" size={80} color="#0782F9" />) : 
              (<Ionicons name="stop-circle" size={80} color='#0782F9'/>)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetStopwatch}>
            <Text><Ionicons name="refresh-circle" size={80} color='#0782F9'/></Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const options = {
  view: {
    flex: 1,
  },
  container: {
    padding: 50,
    width: 500,
  },
  text: {
    fontSize: 30,
    color: '#000',
    marginLeft: 100,
  }
};

export default Time