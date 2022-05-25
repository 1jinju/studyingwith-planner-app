import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native'

function FollowingTab() {
  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.profileView}>
                <View style={styles.imageView}>
                    <Image
                        resizeMode={"cover"}
                        source={require("../assets/images/갱얼쥐.jpg")}
                        style={styles.imageStyle}></Image>
                </View>
                <View style={styles.textView}>
                        <Text>쩝쩝박사</Text>
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
                        <Text style={styles.profileTxt}>쩝쩝박사</Text>
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
                        <Text style={styles.profileTxt}>쩝쩝박사</Text>
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
                        <Text style={styles.profileTxt}>쩝쩝박사</Text>
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
                        <Text style={styles.profileTxt}>쩝쩝박사</Text>
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
                        <Text style={styles.profileTxt}>쩝쩝박사</Text>
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
                        <Text style={styles.profileTxt}>쩝쩝박사</Text>
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
        paddingBottom: 10,
        paddingLeft: 30,
      },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 100,
      },
    textView:{
        paddingTop: 20,
        paddingBottom: 10,
        marginRight: 200,
    },
});


export default FollowingTab;