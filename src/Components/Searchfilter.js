//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,TouchableOpacity } from 'react-native';

// create a component
const SearchFilter = ({data,input}) => {

    // function renderitem (){
    //     return(

    //     )
    // }
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
                            
                    
                    <Text style={{ marginLeft:'5%',  fontSize:20,}}>{item.name}</Text>
                      <Text  style={{ marginLeft:'5%', fontSize:23,color:'black', fontWeight:'bold'}}>{item.name1}</Text>
                      <Text  style={{ marginLeft:'5%', fontSize:20, }}>{item.name2}</Text>
                            <Text style={{borderColor:'#394F2A',borderWidth:1,height:1,marginTop:5}}/>
                            </TouchableOpacity>
                            </View>
                    )
                }
                else if (item.name.toLowerCase().includes(input.toLowerCase())){
                    return(
                        <View style={{marginVertical:15 }}>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name1}</Text>
                        <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name2}</Text>
                        <Text style={{borderColor:'#394F2A',borderWidth:1,height:1,marginTop:5}}/>
                        </View>

                    )
                }
            }}/>
        </View>
    );
};

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         backgroundColor: 'white',
//     },
// });

//make this component available to the app
export default SearchFilter;
