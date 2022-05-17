import { useNavigation } from '@react-navigation/core'
import * as React from 'react';
import { Component, useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

const nowTime = moment().format('YYYY년 MM월 DD일');

const Time = ({}) => {

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

  return (
    <View style={options.view}>
      <View>
        <Text style={{marginTop: 10, marginLeft: 10, alignContent: 'flex-start', fontSize:27, fontWeight: 'bold', padding: 10}}>{nowTime}</Text>
        </View>
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 100}}>
        <Stopwatch laps msecs  start={start}
          reset={reset}
          options={options}
          getTime={(time) => {}} />
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={toggleStopwatch}>
            <Text>{!start ? 
              (<Ionicons name="add-circle" size={100} color='#0782F9'/>) : 
              (<Ionicons name="stop-circle" size={100} color='#0782F9'/>)}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={resetStopwatch}>
            <Text><Ionicons name="refresh-circle" size={100} color='#0782F9'/></Text>
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