//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon from 'react-native-vector-icons/Ionicons';
// create a component
const Topics = ({navigation}) => {
    const [Show, setShow] = useState('Followed');
    return (
        <View style={styles.container}>
            
           <View style={{
            flexDirection:'row',
            marginTop:'10%',
            width:'100%',
           height:h('7%'),
           borderTopWidth:1,
           borderBottomWidth:2,
           borderColor:'grey'
           }}>
            <TouchableOpacity onPress={()=>setShow('Followed')}>
            <Text style={{marginTop:'6%', marginLeft:'8%',fontSize:20,fontWeight:'bold',color:'black',
            borderBottomWidth:3,
            borderColor:Show === 'Followed' ? 'blue' :'#fff'}}>Followed</Text>
            </TouchableOpacity>
           
           <TouchableOpacity onPress={()=>setShow('Suggested')}>
            <Text style={{marginTop:'5%', marginLeft:'9%',fontSize:20,fontWeight:'bold',color:'black',
            borderBottomWidth:3,
        borderColor:Show === 'Suggested' ? 'blue' :'#fff'}}>Suggested</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> setShow('Notinterested')}>
            <Text style={{marginTop:'5%', marginLeft:'6%',fontSize:20,fontWeight:'bold',color:'black',
         borderBottomWidth:3,
         borderColor:Show === 'Notinterested' ? 'blue' :'#fff'}}>Not Interested</Text>
            </TouchableOpacity>
           </View>
           {(()=> {
            if(Show == 'Followed') {
                return(
                    <View style={{marginTop:'10%'}}>
            <Text style={{ marginLeft:'5%',fontSize:19,fontWeight:'bold'}}>The Topics you follow are used to personalise the Tweets, events and ads that you see, and show up publicly on your profile .</Text>
           </View>
                );
            }
            else if(Show == 'Suggested') {
                return(
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
                )
            }
            else if (Show == 'Notinterested'){
                return(
                    <View style={{flex: 1,
                       backgroundColor: 'white',}}>
           
            <Text style={{marginTop:'70%', marginLeft:'8%',fontSize:39,fontWeight:'bold',color:'black'}}>Nothing to see here - yet</Text>
        </View>
                )
            }
            return null
           })()}
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
export default Topics;
