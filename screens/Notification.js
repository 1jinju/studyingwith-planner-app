import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native'

function Notification() {
  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.profileView}>
                <View style={styles.textView}>
                        <Text>슬빔 님이 '그래픽스 조명 과제'에 좋아요를 눌렀습니다.</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.profileView}>
                <View style={styles.textView}>
                    <View style = {styles.editView}>
                        <Text style={styles.profileTxt}>싸갈 님이 '그래픽스 조명 과제'에 좋아요를 눌렀습니다.</Text>
                    </View>
            </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.profileView}>
                <View style={styles.textView}>
                    <View style = {styles.editView}>
                        <Text style={styles.profileTxt}>싸갈 님이 '오픈소스 중간발표'에 좋아요를 눌렀습니다.</Text>
                    </View>
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
        justifyContent: 'space-between',
        //justifyContent:'center',
        paddingRight:15,
        paddingVertical:13,
        //marginRight: 200,
    },
    line: {
      backgroundColor: "#f2f2f2",
      height: 0.75,
      //marginVertical: 10,
    },
});