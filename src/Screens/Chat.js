//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import SearchFilter1 from '../Components/SearchFilter1';
// create a component
const Chats = ({navigation}) => {
  const word = [
    {
      name: 'Laiba Khan',
      id: '1',
    },
    {
      name: 'Marwa Bibi',
      id: '2',
    },
    {
      name: 'Hafsa Umer',
      id: '3',
    },
    {
      name: 'Sumeera Bibi',
      id: '4',
    },
    {
      name: 'Saima Bibi',
      id: '5',
    },
    {
      name: 'Hajra Ali',
      id: '6',
    },
    {
      name: 'Mahnoor Anjum',
      id: '7',
    },
    {
      name: 'Javeria Khan',
      id: '8',
    },
    {
        name: 'Bushra Anjum',
        id: '9',
      },
     
  ];
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txt1}>Chats</Text>
     

      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '-3%',
          marginLeft: '5%',
          width: '90%',
          height: h('5%'),  
          borderColor: 'grey',
          borderWidth: 2,
          backgroundColor: '#394F2A',
          borderRadius: 15,
        }}>
        <Icon
          style={{marginLeft: '3%', marginTop: '1%'}}
          name="search1"
          size={25}
          color={'#fff'}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="white"
          value={input}
          onChangeText={text => setInput(text)}
          style={{
            width: '85%',
            height: h('6%'),
            borderColor: 'grey',
            marginTop: '-1.5%',
            //    placeholderTextColor:'white',
            // borderWidth:2,
            // borderRadius:25,
            // backgroundColor:'',
            fontSize: 20,
          }}
        />
      </View>
     

      <ScrollView>
        <TouchableOpacity onPress={()=>navigation.navigate('Laiba')}>
      <SearchFilter1 data={word} input={input}/>

      </TouchableOpacity>
 
 <View style={styles.box1}>
<Icon1  name='chat' size={40} color={'white'}/>
</View>
</ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  box: {
    marginTop: '6%',
    marginLeft: '5%',
    width: '20%',
    height: h('10%'),
    // backgroundColor:'#4169e1',
    // borderBottomWidth:2,
    // borderColor:'black',
    borderRadius: 100 / 2,
  },
  img: {
    // marginTop:'4%',
    // marginLeft:'4%',
    width: '100%',
    height: h('10%'),
    borderRadius: 100 / 2,
    borderColor: 'white',
    borderWidth: 4,
  },
  txt: {
    marginTop: '20%',
    marginLeft: '15%',
    fontSize: 25,
    width: '170%',
    height: h('8%'),
    color: 'black',
    // backgroundColor:'red'
  },
  txt1: {
    marginTop: '5%',
    marginLeft: '5%',
    fontSize: 25,
    width: '170%',
    height: h('8%'),
    color: 'black',
    fontWeight: 'bold',
    // backgroundColor:'red'
  },
  box1: {
    marginTop: '-42%',
    marginLeft: '72%',
    width: '25%',
    height: h('12%'),
    backgroundColor:'#394F2A',
    // borderBottomWidth:2,
    // borderColor:'black',
    borderRadius: 100 / 2,
    alignItems:'center',
    justifyContent:'center',
  },

  
});

//make this component available to the app
export default Chats;
