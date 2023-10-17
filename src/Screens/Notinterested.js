//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon from 'react-native-vector-icons/Ionicons';
// create a component
const Notinteresteds = ({navigation}) => {
    return (
        <View style={styles.container}>
           
            <Text style={{marginTop:'70%', marginLeft:'8%',fontSize:39,fontWeight:'bold',color:'black'}}>Nothing to see here - yet</Text>
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
});

//make this component available to the app
export default Notinteresteds;
