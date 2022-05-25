import { useNavigation } from '@react-navigation/core';
import React,{ useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Searchbar } from 'react-native-paper';

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View>
            <Searchbar
                placeholder='검색'
                onChangeText = {onChangeSearch}
                value = {searchQuery}
                style = {{
                borderRadius: 20,
                marginHorizontal: 20,
                marginTop: 20,
                width: 350,
                zIndex: 10,
                position: 'absolute'
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  

export default Search