//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,TextInput } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
// import  Icon1 from 'react-native-vector-icons/EvilIcons';
import Headers from '../Components/Header';
import  Icon  from 'react-native-vector-icons/Entypo';
import  Icon1  from 'react-native-vector-icons/MaterialIcons';

// create a component
const Laibakhan = ({navigation}) => {
    return (
        <View style={styles.container}>
           <Headers txt={'Laiba khan'}/>

           <View style={{marginTop:'5%'}}>
            <Text style={styles.txt}>Hello</Text>
            <Text style={styles.txt}>How are you</Text>
           </View>

           <View style={{marginTop:'-20%'}}>
            <Text style={styles.txt1}>Hello</Text>
            <Text style={styles.txt1}>I am Fine </Text>
            <Text style={styles.txt1}>And you </Text>
           </View>

           <Image  style={styles.image} source={require('../Assets/smagreen.png')}/>
           <View style={styles.box}>
            <Icon style={{marginTop:'4%',marginLeft:'2%'}} name='plus' size={35} color={'blue'}/>
            <TextInput style={styles.txtinput}/>
            <Icon1 style={{marginTop:'4%'}} name='keyboard-voice' size={35} color={'blue'}/>

           </View>
           
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
        width:'35%',
        height:'15%',
        marginTop:'5%',
        marginLeft:'2%',
        fontSize:22,
        // fontWeight:'bold',
        backgroundColor:'grey',
        textAlign:'center',
        borderRadius:12,
        color:'white'
    },
    txt1:{
        width:'35%',
        height:'12%',
        marginTop:'5%',
        marginLeft:'60%',
        fontSize:20,
        // fontWeight:'bold',
        backgroundColor:'#394F2A',
        textAlign:'center',
        borderRadius:12,
        color:'white'
    },
    image:{
        marginTop:'-25%',
        marginLeft:'5%',
        width:'80%',
        height:h('20%'),
        // borderRadius:100/2
        // backgroundColor:'red',
    //    alignSelf:'center'
    },

    box:{
        flexDirection:'row',
        width:'100%',
        height:'8.5%',
        marginTop:'5%',
        // marginLeft:'60%',
        backgroundColor:'black',
        // borderRadius:12,
        color:'white'
    },
    txtinput:{
        width:'80%',
        height:h('5%'),
        marginTop:'4%',
        marginLeft:'1%',
        backgroundColor:'#394F2A',
        borderRadius:20,
        // color:'white'
    },
});

//make this component available to the app
export default Laibakhan;
