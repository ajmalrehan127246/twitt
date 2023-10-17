//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/Ionicons';
// create a component
const Headers1 = ({txt}) => {
    const navigation=useNavigation();
    return (
        <View style={styles.header1}>
             <View style={styles.icon}>
                <TouchableOpacity onPress={()=> navigation.openDrawer()} >
            <Icon name='reorder-four-outline' size={35} color={'black'} />
            </TouchableOpacity>
            </View>
       
                <Image  style={styles.img} source={require('../Assets/sma.jpg')}/>
            
            {/* <Text style={styles.header}>{txt}</Text> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    header1: {
        // flex: 1,
        // justifyContent: 'center',
        flexDirection:'row',
        backgroundColor:'black',
        width:'100%',
        height:h('8%'),
        alignItems:'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth:1,
        borderColor:'grey',

    },
    header:{
        fontSize:20,
    },
    icon:{
        marginLeft:'1%',
        width:'14%',
        height:h('9%'),
        alignItems:'center',
        justifyContent:'center',
      },
      img:{ 
        marginTop:'1%',
        marginLeft:'-1%',
        width:'75%',
        height:h('7%'),
        
      },
});

//make this component available to the app
export default Headers1;
