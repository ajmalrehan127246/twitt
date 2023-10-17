//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon from 'react-native-vector-icons/Ionicons';
// create a component
const Lists = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View> 
            <Text style={{marginTop:'8%', marginLeft:'5%',fontSize:24,fontWeight:'bold',color:'black'}}>Pinned Lists</Text>
             <Text style={{marginTop:'15%', marginLeft:'7%',fontSize:20}}>Nothing to see here yet- pin your favourite Lists to access them quickly.</Text>
            </View>

            <View style={{marginTop:'15%'}}> 
            <Text style={{marginTop:'5%', marginLeft:'5%',fontSize:24,fontWeight:'bold',color:'black'}}>Your Lists</Text>
             <Text style={{marginTop:'15%', marginLeft:'7%',fontSize:20}}>You haven't created or followed ant lists.When you do,they'll show up here.</Text>
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
});

//make this component available to the app
export default Lists;
