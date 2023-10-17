//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import Headers1 from '../Components/Header1';

// create a component
const Homes = () => {
    return (
        <View style={styles.container}>
            <Headers1 txt='Home Page'/>
            <Image style={styles.img} source={require('../Assets/climate.jpg')}/>
            
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
    img:{
        marginTop:'2%',
      width:'100%',
      height:h('82%')
    },
});

//make this component available to the app
export default Homes;
