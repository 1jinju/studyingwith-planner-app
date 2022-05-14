import { useNavigation } from '@react-navigation/core'
//import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import { auth } from '../firebase'

/*const navigationOptions = ({navigation}) => {
  return{
      headerLeft: () => (
          <Button
              onPress={() => navigation.openDrawer()}
              title="Draw"
          />
      ),
      headerTitleAlign: 'center',  

  }
};*/

const Home = ({navigation}) => {
  const navigations = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
    //Email: {auth.currentUser?.email}
  return (
    <View style={styles.container}>
      <Text>안녕하세요</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <Button onPress={() => navigations.openDrawer()} title="Drawer"/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})