import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

function Notification() {
  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.profileView}>
                <View style={styles.textView}>
                <Ionicons name="ios-bulb-outline" size={24} color="black" />
                  <Text style={styles.profileText}>버전 업데이트 중요 알림</Text>
                  <TouchableOpacity>
                    <Text style={styles.buttonContainer}>보기</Text>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.profileView}>
                <View style={styles.textView}>
                <Ionicons name="ios-bulb-outline" size={24} color="black" />
                  <Text style={styles.profileText}>타이머 오류에 관하여</Text>
                  <TouchableOpacity>
                    <Text style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 6, paddingLeft: 160, color:'#0782F9', fontSize: 15,}}>보기</Text>
                  </TouchableOpacity>
            </View>
            </View>

        </View>
    </ScrollView>
  )
}

export default Notification;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    },
    profileView: {
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        paddingLeft: 30,
      },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 100,
      },
    textView:{
        flex: 1,
        flexDirection:'row',
        paddingVertical: 13,
    },
    line: {
      backgroundColor: "#f2f2f2",
      height: 0.75,
      //marginVertical: 10,
    },
    profileText:{
      paddingLeft: 10,
      paddingTop: 5,
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 6,
      paddingLeft: 145,
      paddingRight: 10,
      marginRight:10,
      color:'#0782F9',
      fontSize: 15,
    },
});