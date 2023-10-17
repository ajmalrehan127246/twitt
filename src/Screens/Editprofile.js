//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
// create a component
const EditProfile = () => {
    return (
        <View style={styles.container}>
             <View style={{
                flexDirection:'row',
                 width:'100%',
               height:h('20%'),
               backgroundColor:'#394F2A',
                   }}>
                <TouchableOpacity>
             <Icon style={{marginTop:'20%',marginLeft:'60%'}} name='camera-outline' size={40} color={'white'}/>
             </TouchableOpacity>

            </View>
            <View style={styles.box1}>
            <Image style={{  width:'100%',
        height:h('12%'),
        borderRadius:100/2,
        borderColor:'white',
        borderWidth:4,
       
        }} source={require('../Assets/download.jpg')}/>
           
            <View style={{marginLeft:'-70%', width:'50%',}}>
            <Icon style={{marginTop:'75%'}} name='camera-outline' size={40} color={'black'}/>
            </View>
            </View>

            <View style={styles.box2}>
                <Text style={{margintop:'13%',marginLeft:'7%',fontSize:20,fontWeight:'bold'}}>Name</Text>
                <Text  style={{marginLeft:'7%',fontSize:22,fontWeight:'bold',color:'black'}}>Laiba Khan</Text>
            </View>

            <View style={styles.box2}>
                <Text style={{margintop:'13%',marginLeft:'7%',fontSize:22,fontWeight:'bold'}}>Bio</Text>

            </View>

            <View style={styles.box2}>
                <Text style={{margintop:'13%',marginLeft:'7%',fontSize:22,fontWeight:'bold'}}>Location</Text>
               
            </View>

            <View style={styles.box2}>
                <Text style={{margintop:'13%',marginLeft:'7%',fontSize:20,fontWeight:'bold'}}>Date of birth</Text>
                <Text  style={{marginLeft:'7%',fontSize:22,fontWeight:'bold',color:'black'}}>15 january 199</Text>
            </View>

            <View style={styles.box3}>
                <Text style={{margintop:'10%',marginLeft:'7%',fontSize:20,fontWeight:'bold'}}>Month and day:Only you</Text>
                <Text  style={{marginLeft:'7%',fontSize:22,fontWeight:'bold'}}>Year:Only you</Text>
            </View>
            <View style={styles.box4}>
                <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'black'}}>Switch to Professional</Text>
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
    box1:{
        marginTop:'-6%',
        marginLeft:'5%',
        width:'25%',
        height:h('12%'),
        // backgroundColor:'#4169e1',
        // borderWidth:5,
        // borderColor:'black',
        borderRadius:150/2,
        flexDirection:'row'
        
    },
    box2:{
        // backgroundColor:'blue',
        height:h('9%'),
        marginTop:'4%',
        borderBottomWidth:1,
        borderColor:'grey'
    },
    box3:{
        // backgroundColor:'blue',
        height:h('9%'),
        marginTop:'1%',
        // marginLeft:'10%',
       
    },
    box4:{
        // backgroundColor:'blue',
        marginTop:'2%',
         marginLeft:'2%',
        width:'70%',
        height:h('6%'),
        borderWidth:2,
        borderColor:'grey',
        borderRadius:30,
    },
  
});

//make this component available to the app
export default EditProfile;
