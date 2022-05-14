import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'

function Setting() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>설정</Text>
      <Button title="뒤로가기" onPress={()=>NavigationContainer.goBack()}/>
    </View>
  )
}

export default Setting