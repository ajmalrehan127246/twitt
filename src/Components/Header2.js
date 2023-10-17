//import liraries
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

// create a component
const Headers2 = ({txt}) => {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row',
    backgroundColor: 'black',
    width: '100%',
    height: h('8%'),
    alignItems: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'grey',}}>
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="reorder-four-outline" size={35} color={'black'} />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Search SMA"
        placeholderTextColor={'grey'}
        // value={input}
        style={{
          marginLeft: '5%',
          width: '80%',
          height: h('5%'),
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 25,
          backgroundColor: '#394F2A',
          fontSize: 16,
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'black',
    width: '100%',
    height: h('8%'),
    alignItems: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  textinput: {
    marginLeft: '5%',
    width: '80%',
    height: h('5%'),
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 25,
    backgroundColor: '#394F2A',
    fontSize: 16,
  },
});

//make this component available to the app
export default Headers2;
