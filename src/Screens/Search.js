//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,FlatList, TouchableOpacity,TextInput,ScrollView } from 'react-native';
import Headers2 from '../Components/Header2';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchFilter from '../Components/Searchfilter';


// create a component
const Searchs = ({navigation}) => {
 
    const word = [
        {
          name: 'Trending in Pakistan',
          name1:'#Pakistan',
          name2:'3,684 Tweets',
        },
        {
          name: 'Trending in Pakistan',
          name1: 'Snapchat',
          name2:'86.1k Tweets',
        },
        {
          name: 'Trending in Pakistan',
          name1:'#SMBB',
          name2:'5,084 Tweets',
        },
        {
          name: 'Trending in Pakistan',
          name1: 'Presidential',
          name2:'26.4K Tweets',
        },
       
        {
          name: 'Trending in Pakistan',
          name1: 'Cricket',
          name2:'35.1K Tweets',
        },
        {
          name: 'Trending in Pakistan',
          name1:'#Pakistan',
          name2:'3,684 Tweets',
        },
       
      ];

      const [Input, setInput] = useState('');
      
   
    return (
        <View style={styles.container}>
        
          
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
         value={Input}
         onChangeText={(text)=>setInput(text)}
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
    <ScrollView>

            <Text style={styles.txt}>Trends for you</Text>

            <SearchFilter data={word} input={Input} />
          
            
           
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
    txt:{
      marginLeft:'5%',
      marginTop:'5%',
      fontSize:25,
      color:'black',
      fontWeight:'bold'

    },

    txt1:{
      marginLeft:'5%',
      fontSize:20,
     
   },

    txt2:{
      marginLeft:'5%',
      fontSize:23,
      color:'black',
      fontWeight:'bold'


    },
});

//make this component available to the app
export default Searchs;
