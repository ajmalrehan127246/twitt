//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

// create a component
const SearchFilter1 = ({data,input}) => {
    const navigation=useNavigation();
    return (
        <View style={{marginTop:10 , marginLeft:10 ,backgroundColor:'#ffffff',flex:1 }}>
            
            <FlatList
            data={data} 
            renderItem={({item}) =>{
                if (input === ""){
                    return(
                        <View style={{marginVertical:15 }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Laiba')}>
                            
                    
                    <Text style={{ marginLeft:'5%',  fontSize:23,color:'black',}}>{item.name}</Text>
                      {/* <Text  style={{ marginLeft:'5%', fontSize:23,color:'black', fontWeight:'bold'}}>{item.name1}</Text> */}
                      {/* <Text  style={{ marginLeft:'5%', fontSize:20, }}>{item.name2}</Text> */}
                     
                            <Text style={{borderColor:'#394F2A',borderWidth:1,height:1,marginTop:5}}/>
                            </TouchableOpacity>
                           
                            </View>
                            
                    )
                }
                else if (item.name.toLowerCase().includes(input.toLowerCase())){
                    return(
                        <View style={{marginVertical:10 }}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                       
                        <Text style={{borderColor:'#394F2A',borderWidth:1,height:1,marginTop:5}}/>
                        </View>

                    )  
                }
            }}/>
            
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
    // box1: {
    //     marginTop: '-43%',
    //     marginLeft: '72%',
    //     width: '25%',
    //     height: h('12%'),
    //     backgroundColor:'green',
    //     borderBottomWidth:2,
    //     borderColor:'black',
    //     borderRadius: 100 / 2,
    //   },
});

//make this component available to the app
export default SearchFilter1;
