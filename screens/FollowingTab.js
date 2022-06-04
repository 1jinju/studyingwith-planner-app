import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'

function FollowingTab() {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.profileView}>
                <View style={styles.imageView}>
                    <Image
                        resizeMode={"cover"}
                        source={require("../assets/images/갱얼쥐.jpg")}
                        style={styles.imageStyle}></Image>
                </View>
                <View style={styles.textView}>
                        <Text>조현지</Text>
                </View>
            </View>

            <View style={styles.profileView}>
                <View style={styles.imageView}>
                    <Image
                        resizeMode={"cover"}
                        source={require("../assets/images/히쥬.jpg")}
                        style={styles.imageStyle}></Image>
                </View>
                <View style={styles.textView}>
                    <View style = {styles.editView}>
                        <Text style={styles.profileTxt}>히주</Text>
                    </View>
            </View>
            </View>

            <View style={styles.profileView}>
                <View style={styles.imageView}>
                    <Image
                        resizeMode={"cover"}
                        source={require("../assets/images/쏭아.jpg")}
                        style={styles.imageStyle}></Image>
                </View>
                <View style={styles.textView}>
                    <View style = {styles.editView}>
                        <Text style={styles.profileTxt}>🍉난이송아💥</Text>
                    </View>
            </View>
            </View>

            <View style={styles.profileView}>
                <View style={styles.imageView}>
                    <Image
                        resizeMode={"cover"}
                        source={require("../assets/images/괭이.jpg")}
                        style={styles.imageStyle}></Image>
                </View>
                <View style={styles.textView}>
                    <View style = {styles.editView}>
                        <Text style={styles.profileTxt}>싸갈</Text>
                    </View>
            </View>
            </View>

            <View style={styles.profileView}>
                <View style={styles.imageView}>
                    <Image
                        resizeMode={"cover"}
                        source={require("../assets/images/슬뱌.jpg")}
                        style={styles.imageStyle}></Image>
                </View>
                <View style={styles.textView}>
                    <View style = {styles.editView}>
                        <Text style={styles.profileTxt}>슬빔</Text>
                    </View>
            </View>
            </View>

            <View style={styles.profileView}>
                <View style={styles.imageView}>
                    <Image
                        resizeMode={"cover"}
                        source={require("../assets/images/붕어빵.jpg")}
                        style={styles.imageStyle}></Image>
                </View>
                <View style={styles.textView}>
                    <View style = {styles.editView}>
                        <Text style={styles.profileTxt}>졍</Text>
                    </View>
            </View>
            </View>

            <View style={styles.profileView}>
                <View style={styles.imageView}>
                    <Image
                        resizeMode={"cover"}
                        source={require("../assets/images/미숙.png")}
                        style={styles.imageStyle}></Image>
                </View>
                <View style={styles.textView}>
                    <View style = {styles.editView}>
                        <Text style={styles.profileTxt}>김미숙🐶</Text>
                    </View>
            </View>
            </View>

        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
    },
    profileView: {
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 3,
        paddingLeft: 30,
      },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 100,
      },
    textView:{
        flex: 1,
        justifyContent:'center',
        paddingLeft: 20,
        paddingVertical: 15,
        //marginRight: 200,
    },
});


export default FollowingTab;