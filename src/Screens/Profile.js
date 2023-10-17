//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,StatusBar } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

// create a component
const Profiles = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <Image style={{
                //  marginLeft:'%',
                 marginTop:'40%',
                 width:'100%',
                 height:h('35%'),
                //  backgroundColor:'red'
            }} source={require('../Assets/smagreen.png')}/>
            
                <View style={{
                    width:'50%',
                    height:h('5%'),
                    marginTop:'5%',
                    marginLeft:'5%',
                    borderWidth:3,
                    borderColor:'green',
                    backgroundColor:'green',
                    borderRadius:12,
                  }}>
           <TouchableOpacity 
           onPress={()=>navigation.navigate('Login')}>
            <Text style={{
                 fontSize:20,
                 color:'white',
                 textAlign:'center',
            }}>Login</Text>
            </TouchableOpacity>
            </View>
            
            <View style={{
                width:'50%',
                height:h('5%'),
                marginTop:'5%',
                marginLeft:'5%',
                borderWidth:3,
                borderColor:'green',
                backgroundColor:'green',
                borderRadius:12,
            }}>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
            <Text style={{
                 fontSize:20,
                 color:'white',
                 textAlign:'center',
            }}>Sign Up</Text>
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
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Profiles;
