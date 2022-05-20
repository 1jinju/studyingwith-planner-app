import { useNavigation } from '@react-navigation/core'
import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Calendar } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

function Statistics ({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ()=>
      <View style={{flexDirection:'row', paddingRight:20}}>
        <Ionicons name="search" size={25} color="#5D5D5D" style={{paddingRight:20}} onPress={()=>navigation.navigate('')} />
        <Ionicons name="person-circle" size={25} color="#5D5D5D" style={{paddingRight:20}} onPress={()=>navigation.navigate('Follow')} />
        <Ionicons name="notifications" size={25} color="#5D5D5D" style={{paddingRight:20}} onPress={()=>navigation.navigate('Notification')} />
        <Ionicons name="menu" size={25} color="#5D5D5D" onPress={()=>navigation.navigate('')}/>
      </View>        
    });
  }, []);

  return (
      <View>
          <Calendar style={{}}/>
      </View>
  )
}

export default Statistics


