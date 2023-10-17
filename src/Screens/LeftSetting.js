//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';

// create a component
const LeftSettings = ({navigation}) => {
    // const navigation=useNavigation();
   
    return (
        <View style={styles.container}>
            
            <View style={styles.boxx}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
             <Image style={styles.img} source={require('../Assets/Sma.png')}/>
             </TouchableOpacity>
            </View>
            

           <TouchableOpacity onPress={()=>navigation.navigate('Profile1')} style={{width:'97%',marginLeft:'5%'}} >
            <View style={styles.box}>
             <Text style={styles.txt}>Profile</Text>
             </View>
          </TouchableOpacity>

             <TouchableOpacity onPress={()=>navigation.navigate('SMACircle')} style={{width:'97%',marginLeft:'5%'}}>
            <View style={styles.box1}>
             <Text style={styles.txt}>SMA Circle</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Topic')} style={{width:'97%',marginLeft:'5%'}}>
            <View style={styles.box2}>
             <Text style={styles.txt}>Topic</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Bookmark')} style={{width:'97%',marginLeft:'5%'}}>
            <View style={styles.box3}>
             <Text style={styles.txt}>Bookmark</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('List')} style={{width:'97%',marginLeft:'5%'}}>
            <View style={styles.box4}>
             <Text style={styles.txt}>List</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Chat')} style={{width:'97%',marginLeft:'5%'}}>
            <View style={styles.box5}>
             <Text style={styles.txt}>Chat</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('ProfessionalTool')} style={{width:'97%',marginLeft:'5%'}}>
            <View style={styles.box6}>
             <Text style={styles.txt}>Professional Tool</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Settings')} style={{width:'97%',marginLeft:'5%'}}>
            <View style={styles.box7}>
             <Text style={styles.txt}>Setting</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{width:'97%',marginLeft:'5%'}}>
            <View style={styles.box8}>
             <Text style={styles.txt1}>Log Out</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    boxx:{
         marginTop:'5%',

         width:'100%',
         height:h('10%'),
         borderRadius:10,
        //  backgroundColor:'red',
    },
    img:{
        marginTop:'5%',
        marginLeft:'10%',
        width:'19%',
        height:h('8%'),
        borderRadius:10,
        // backgroundColor:'red',
    //    alignSelf:'center'
    },
    box:{
        marginTop:'15%',
        marginLeft:'5%',
        width:'90%',
        height:h('7%'),
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        // backgroundColor:'#87ceeb',
       
        
    },
    box1:{
        marginTop:'3%',
        marginLeft:'5%',
        width:'90%',
        height:h('7%'),
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        // backgroundColor:'#87ceeb',
        
    },
    box2:{
        marginTop:'3%',
        marginLeft:'5%',
        width:'90%',
        height:h('7%'),
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        // backgroundColor:'#87ceeb',
        
    },
    box3:{
        marginTop:'3%',
        marginLeft:'5%',
        width:'90%',
        height:h('7%'),
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        // backgroundColor:'#87ceeb',
        
    },
    box4:{
        marginTop:'3%',
        marginLeft:'5%',
        width:'90%',
        height:h('7%'),
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        // backgroundColor:'#87ceeb',
        
    },
    box5:{
        marginTop:'3%',
        marginLeft:'5%',
        width:'90%',
        height:h('7%'),
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        // backgroundColor:'#87ceeb',
        
    },
    box6:{
        marginTop:'3%',
        marginLeft:'5%',
        width:'90%',
        height:h('7%'),
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        // backgroundColor:'#87ceeb',
        
    },
    box7:{
        marginTop:'5%',
        marginLeft:'5%',
        width:'90%',
        height:h('7%'),
        borderWidth:2,
        borderColor:'white',
        borderRadius:10,
        // backgroundColor:'#87ceeb',
        
    },
    box8:{
        marginTop:'5%',
        marginLeft:'3%',
        width:'90%',
        height:h('6%'),
        borderWidth:2,
        borderColor:'white',
        borderRadius:20,
        backgroundColor:'#394F2A',
    
        
    },
    txt:{ 
        fontSize:20,
        fontWeight:'bold',
        marginTop:'4%',
        marginLeft:'4%',
        color:'#394F2A',
        
    },
    txt1:{ 
        fontSize:22,
        fontWeight:'bold',
        marginTop:'2%',
        // marginLeft:'4%',
        color:'white',
        textAlign:'center',
        justifyContent:'center',
        
    },
});

//make this component available to the app
export default LeftSettings;
