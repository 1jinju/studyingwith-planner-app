import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native'
import { auth } from '../firebase'
import { Ionicons } from '@expo/vector-icons';

function Setting() {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.profileView}>
              <View style={styles.textView}>
                <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                  <Text style={styles.buttonText}>Sign out</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.line}></View>

            <View style={styles.profileView}>
                <View style={styles.textView}>
                  <Text style={styles.buttonText}>친구 관리</Text>
              </View>
            </View>
            <View style={styles.line}></View>

            <View style={styles.profileView}>
                <View style={styles.textView}>
                  <Text style={styles.buttonText}>다운로드한 기출문제</Text>
              </View>
            </View>
          </View>
    </ScrollView>
  )
}

export default Setting;

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