//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

// create a component
const Suggesteds = () => {
    return (
        <View style={styles.container}>
            <View style={{marginTop:'10%',marginLeft:'5%'}}>
                <Text style={{marginTop:'6%',fontSize:25,fontWeight:'bold',color:'black'}}>Categories</Text>
            </View>

            <View style={{flexDirection:'row'}}>           
            <View style={{
                marginTop:'10%',
                marginLeft:'3%',
                borderColor:'black',
                borderWidth:2,
                width:'45%',
                height:h('11%'),
                borderRadius:15,
                backgroundColor:'#394F2A',
            
                }}>
                    <Text style={{color:'white',marginTop:'5%',marginLeft:'5%',fontSize:20}}>Fashion &</Text>
                    <Text style={{color:'white',marginLeft:'5%',fontSize:20}}> beauty</Text>
            </View>

            <View style={{
                marginTop:'10%',
                marginLeft:'3%',
                borderColor:'black',
                borderWidth:2,
                width:'45%',
                height:h('11%'),
                borderRadius:15,
                backgroundColor:'#394F2A',
                }}>
              <Text style={{color:'white',marginTop:'15%',marginLeft:'5%',fontSize:20,textAlign:'center'}}>Outdoors</Text>
            </View>

            </View>


            <View style={{flexDirection:'row'}}>           
            <View style={{
                marginTop:'5%',
                marginLeft:'3%',
                borderColor:'black',
                borderWidth:2,
                width:'45%',
                height:h('11%'),
                borderRadius:15,
                backgroundColor:'#394F2A',
            
                }}>
                    <Text style={{color:'white',marginTop:'12.5%',marginLeft:'5%',fontSize:20,textAlign:'center'}}>Arts & Culture</Text>
            </View>

            <View style={{
                marginTop:'5%',
                marginLeft:'3%',
                borderColor:'black',
                borderWidth:2,
                width:'45%',
                height:h('11%'),
                borderRadius:15,
                backgroundColor:'#394F2A',
                }}>
            <Text style={{color:'white',marginTop:'5%',marginLeft:'5%',fontSize:20}}>Animation &</Text>
            <Text style={{color:'white',marginLeft:'5%',fontSize:20}}>comics</Text>
            </View>

            </View>

            <View style={{flexDirection:'row'}}>           
            <View style={{
                marginTop:'5%',
                marginLeft:'3%',
                borderColor:'black',
                borderWidth:2,
                width:'45%',
                height:h('11%'),
                borderRadius:15,
                backgroundColor:'#394F2A',
            
                }}>
                     <Text style={{color:'white',marginTop:'5%',marginLeft:'5%',fontSize:20}}>Business &</Text>
                    <Text style={{color:'white',marginLeft:'5%',fontSize:20}}>finance</Text>
            </View>

            <View style={{
                marginTop:'5%',
                marginLeft:'3%',
                borderColor:'black',
                borderWidth:2,
                width:'45%',
                height:h('11%'),
                borderRadius:15,
                backgroundColor:'#394F2A',
                }}>
                     <Text style={{color:'white',marginTop:'12.5%',marginLeft:'5%',fontSize:20,textAlign:'center'}}>Food</Text>

            </View>

            </View>

            <Text style={{color:'#394F2A',marginTop:'10%',marginLeft:'5%',fontSize:22,textAlign:'center'}}>Show More</Text>


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
export default Suggesteds;


