//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar,TextInput,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
// create a component
const Signups = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.txt}>Name</Text>
            <TextInput style={styles.txtinput}/>
            <Text style={styles.txt1}>Email</Text>
            <TextInput style={styles.txtinput}/>
            <Text style={styles.txt2}>Date Of Birth</Text>
            <TextInput style={styles.txtinput}/>
            <Text style={styles.txt3}>Password</Text>
            <TextInput style={styles.txtinput}/>
            <Text style={styles.txt4}>ConfirmPassword</Text>
            <TextInput style={styles.txtinput}/>

            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.txt5}>GO to Login</Text>
            </TouchableOpacity>

            <View style={styles.box}>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.txt6}>Sign Up</Text>
                </TouchableOpacity>
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
        marginTop:'7%',
        marginLeft:'17%',
        fontSize:20,
        fontWeight:'bold',
        color:'green',
    },
    txt1:{
        marginTop:'5%',
        marginLeft:'17%',
        fontSize:20,
        fontWeight:'bold',
        color:'green',
    },
    txt2:{
        marginTop:'5%',
        marginLeft:'17%',
        fontSize:20,
        fontWeight:'bold',
        color:'green',
    },
    txt3:{
        marginTop:'5%',
        marginLeft:'17%',
        fontSize:20,
        fontWeight:'bold',
        color:'green',
    },
    txt4:{
        marginTop:'5%',
        marginLeft:'17%',
        fontSize:20,
        fontWeight:'bold',
        color:'green',
    },
    txt5:{
        marginTop:'4%',
        marginLeft:'54%',
        fontSize:20,
        fontWeight:'bold',
        color:'green',
    },
    txtinput:{
            marginTop:'2%',
            marginLeft:'15%',
            width:'70%',
            height:h('7%'),
            // borderWidth:2,
            // borderColor:'white',
            borderRadius:20,
            backgroundColor:'#3b3c3c',
            textAlign:'center',
            color:'white',
            fontSize:18,
           },
           box:{
            marginTop:'10%',
            marginLeft:'30%',
            width:'45%',
            height:h('5%'),
            borderWidth:2,
            borderColor:'green',
            borderRadius:10,
            backgroundColor:'green',
            
           },
           txt6:{
            marginTop:'2%',
            textAlign:"center",
            fontSize:17,
            color:'white'
           },


});

//make this component available to the app
export default Signups;
