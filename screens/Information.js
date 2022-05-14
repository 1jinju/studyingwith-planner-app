/*import { withNavigation } from 'react-navigation';

<TouchableOpacity
  style={{ width: scaleWidth(66) }}
  onPress={() => this.props.navigation.toggleDrawer()}>
	<Text>메뉴열기</Text>
</TouchableOpacity>


export default withNavigation(Home);*/
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Information() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>공지사항</Text>
    </View>
  )
}

export default Information