//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

// create a component
const ProfessionalTools = () => {
    return (
        <View style={styles.container}>
            <View style={{marginTop:'35%'}}>
            <Text style={{ marginLeft:'8%',fontSize:30,fontWeight:'bold',color:'black'}}>Twitter for</Text>
            <Text style={{ marginLeft:'8%',fontSize:30,fontWeight:'bold',color:'black'}}>Professionals</Text>
            </View>

            <View style={{marginTop:'10%'}}>
            <Text style={{ marginLeft:'5%',fontSize:19,fontWeight:'bold'}}>Get access to the tools you need to better connect with your audience,grow your brand and increase your profits.</Text>
            </View>

            <View style={styles.box}>
             <Text style={{marginTop:'2.5%', textAlign:'center', fontSize:19,fontWeight:'bold',color:'white'}}>Agree & Continue</Text>

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
    box:{
        marginTop:'20%',
        marginLeft:'10%',
       width:'80%',
       height:h('6%'),
    //    borderColor:'black',
    //    borderWidth:2,
       borderRadius:30,
       backgroundColor:'#394F2A'
    },
});

//make this component available to the app
export default ProfessionalTools;
