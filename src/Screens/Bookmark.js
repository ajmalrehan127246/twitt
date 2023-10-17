//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon from 'react-native-vector-icons/Ionicons';
// create a component
const Bookmarks = ({navigation}) => {
    return (
        <View style={styles.container}>
           
            <View>
                <Text style={{marginTop:'50%', marginLeft:'8%',fontSize:39,fontWeight:'bold',color:'black'}}>Save Tweets for</Text>
                <Text   style={{ marginLeft:'8%',fontSize:39,fontWeight:'bold',color:'black'}}>later</Text>
                <Text style={{marginTop:'5%', marginLeft:'8%',fontSize:20,fontWeight:'bold'}}>Don't let the good ones fly away! Bookmark Tweets to easily find them again in the future.</Text>
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
export default Bookmarks;
