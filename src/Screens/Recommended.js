//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/AntDesign';
// create a component
const Recommendeds = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection:'row',
                 marginTop:'15%',
                 marginLeft:'5%',
                 width:'90%',
                 height:h('6%'),
                 borderColor:'grey',
                 borderWidth:2,
                //  backgroundColor:'blue',
                 borderRadius:25,
                 }}>
                    <Icon style={{marginLeft:'3%',marginTop:'2%'}} name='search1' size={30}/>
                <TextInput placeholder='Search People' style={{
                    width:'85%',
                    height:h('6%'),
                    borderColor:'grey',
                    // borderWidth:2,
                    // borderRadius:25,
                    // backgroundColor:'red',
                    fontSize:22,
                }}/>
                
                
            </View >

         <View style={{marginTop:'5%'}}>
          <Text style={{ marginLeft:'5%',fontSize:18,fontWeight:'bold'}}>People won't be notified when you edit your twitter circle. Anyone you add will be able to see your previous twitter circle Tweets.</Text>
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
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Recommendeds;
