//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import  Icon1  from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

// create a component
const Headers = ({txt}) => {
    const navigation= useNavigation();
    
    return (
        <View style={styles.header}>
            <View style={styles.icon}>
                <TouchableOpacity onPress={()=>navigation.goBack()} >
            <Icon1 name='left' size={40} color={'blue'} />
            </TouchableOpacity>
            </View>
            <Image style={styles.image} source={require('../Assets/dp.jpg')}/>

            <View style={{marginLeft:'3%',marginTop:'-2%'}}>
           
            <Text style={styles.headertxt}>{txt}</Text>
            </View>
            <View style={styles.box}>
              <Icon name='video-call' size={40}color={'blue'}/>
            </View>
            <View style={styles.box1}>
              <Icon name='call' size={35}color={'blue'}/>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
          flexDirection:'row',
        backgroundColor:'black',
        width:'100%',
        height:h('8%'),
        alignItems:'center',
        // backgroundColor:'red',
    },
    image:{
        marginLeft:'5%',
        width:'13%',
        height:h('6%'),
        borderRadius:100/2
        // backgroundColor:'red',
    //    alignSelf:'center'
    },
    icon:{
        // marginLeft:'5%',
        // backgroundColor:'#b999a6',
        width:'14%',
        height:h('7%'),
        borderRadius:100/2,
        alignItems:'center',
        justifyContent:'center',
        // borderColor:'black',
        // borderWidth:2,
        


    },
    headertxt:{
        fontSize:20,
        textAlign:'center',
        textAlignVertical:'center',
        color:'white',
        fontWeight:'bold'
        


    },
    box:{
        marginLeft:'8%',
        width:'12%',
        height:h('6%'),
        borderRadius:100/2,
        alignItems:'center',
        justifyContent:'center',
        // borderColor:'black',
        // borderWidth:2,
    },
    box1:{
        marginLeft:'2%',
        width:'12%',
        height:h('6%'),
        borderRadius:100/2,
        alignItems:'center',
        justifyContent:'center',
        // borderColor:'black',
        // borderWidth:2,
    },
});

//make this component available to the app
export default Headers;
