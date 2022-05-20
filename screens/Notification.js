import { useNavigation } from '@react-navigation/core'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'

function Notification() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>알림</Text>
    </View>
  )
}

export default Notification;