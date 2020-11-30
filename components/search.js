import React from 'react';
import {View, TextInput, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window');

const Search = () => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        width: '100%',
        marginVertical: 15,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity>
        <Icon name="search" size={22} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search Properties"
        style={{
          fontSize: 14,
          color: '#999',
          marginLeft: 5,
          fontWeight: 'bold',
          paddingVertical: 7,
          width:'80%',
          paddingHorizontal: 10,
        }}
      />
    </View>
  );
};

export default Search;
