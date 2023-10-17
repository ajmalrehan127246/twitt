//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/AntDesign';
import  Icon1 from 'react-native-vector-icons/EvilIcons';
// create a component
const Profiles1= ({navigation}) => {
    const [Show, setShow] = useState('Tweets');
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection:'row',
                 width:'100%',
               height:h('17%'),
               backgroundColor:'#394F2A',
                   }}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
             <Icon1 style={{marginTop:'5%',marginLeft:'5%'}} name='arrow-left' size={45} color={'white'}/>
             </TouchableOpacity>
             <Text style={{marginTop:'2%',fontSize:20,color:'white'}}>Profile</Text>

            </View>

            <View style={styles.box1}>
            <Image style={styles.img} source={require('../Assets/dp.jpg')}/>
            </View>
            <View style={{marginTop:'4%',marginLeft:'3%',}}>
            <Text style={{color:'black',fontSize:22,fontWeight:'bold'}}>Laiba Khan</Text>
            <Text style={{fontSize:17,marginTop:'2%',fontWeight:'bold'}}>@Laiba_Khan27</Text>
            </View>
            <View style={styles.box2}>
                <View style={{flexDirection:'row'}}>
             <Icon name='calendar' size={25}/>
             <Text style={{marginLeft:'5%',fontSize:18,fontWeight:'bold'}}>Joined September 2021</Text>
             </View>
            </View>
            <View style={{flexDirection:'row' ,marginTop:'4%'}}>
                <Text style={{marginLeft:'4%',fontSize:20,fontWeight:'bold',color:'black'}} >6</Text>
                <Text style={{marginLeft:'2%',fontSize:18,fontWeight:'bold'}}>Following</Text>
                <Text style={{marginLeft:'5%',fontSize:20,fontWeight:'bold',color:'black'}}>5</Text>
                <Text style={{marginLeft:'2%',fontSize:18,fontWeight:'bold'}}>Follower</Text>
            </View>
            <View style={{flexDirection:'row',marginTop:'7%',borderBottomWidth:1,borderColor:'grey',height:h('6%')}}>
               
                <TouchableOpacity onPress={()=>setShow('Tweets')}>
                <Text style={{marginTop:'10%', marginLeft:'3%',fontSize:20,fontWeight:'bold',color:'black',
              borderBottomWidth:3,borderColor:Show === 'Tweets' ? 'blue':'#fff'}}> Tweets</Text>
                </TouchableOpacity>

               <TouchableOpacity onPress={()=>setShow('Tweets & replies')}>
                <Text style={{marginTop:'5%', marginLeft:'3%',fontSize:20,fontWeight:'bold',color:'black',
             borderBottomWidth:3,borderColor:Show === 'Tweets & replies' ? 'blue':'#fff'}}> Tweets & replies</Text>
                </TouchableOpacity>
             
              <TouchableOpacity onPress={()=>setShow('Media')}>
                <Text style={{marginTop:'11%', marginLeft:'3%',fontSize:20,fontWeight:'bold',color:'black',
            borderBottomWidth:3,borderColor:Show === 'Media' ? 'blue':'#fff'}}> Media</Text>
                </TouchableOpacity>
              
               <TouchableOpacity onPress={()=>setShow('Likes')}>
                <Text style={{marginTop:'11%', marginLeft:'3%',fontSize:20,fontWeight:'bold',color:'black',borderBottomWidth:3,
                borderColor:Show === 'Likes' ? 'blue':'#fff'}}> Likes</Text>
                </TouchableOpacity>
                </View>

                {(()=>{
                     if(Show == 'Tweets')
                     {
                        return(
                          <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('Editprofile')}>
                        <View style={styles.box3}>
                           <Text style={{fontSize:20,textAlign:'center',color:'black',fontWeight:'bold'}}>Edit Profile</Text>
                        </View>
                        </TouchableOpacity>
                       
                         <View>
                            <Text style={{marginTop:'20%', marginLeft:'3%',fontSize:25,fontWeight:'bold',color:'black'}}>Who to follow</Text>
                        </View>

                        </View>
                        );
                     }

                     else if(Show == 'Tweets & replies')
                     {
                        return(
                            <View style={{ flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',}}>
                            <Text style={{fontSize:25,fontWeight:'bold',color:'black'}}>Tweets & Replies</Text>
                        </View>
                        );
                     }

                     else if(Show == 'Media')
                     {
                        return(
                            <View style={{ flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',}}>
                            <Text  style={{fontSize:25,fontWeight:'bold',color:'black'}}>Media</Text>
                        </View>
                        );
                     }

                     else if(Show == 'Likes')
                     {
                        return(
                            <View style={{ flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'white',}}>
                            <Text  style={{fontSize:25,fontWeight:'bold',color:'black'}}>Likes</Text>
                        </View>
                        );
                     }

                     return null 

                } ) ()}
           
           
           
            
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
    box:{
        width:'100%',
        height:h('17%'),
        backgroundColor:'#394F2A',
        // flexDirection:'row'
    },
    box1:{
        marginTop:'-6%',
        marginLeft:'5%',
        width:'20%',
        height:h('10%'),
        // backgroundColor:'#4169e1',
        // borderWidth:5,
        // borderColor:'black',
        borderRadius:100/2,
        
    },
    img:{
        // marginTop:'4%',
        // marginLeft:'4%', 
        width:'100%',
        height:h('10%'),
        borderRadius:100/2,
        borderColor:'white',
        borderWidth:4,
    },
    box2:{
        marginTop:'6%',
        marginLeft:'3%',
        width:'60%',
        height:h('4%'),
        backgroundColor:'white',
        // borderWidth:1,
        // borderColor:'black',
        borderRadius:10,
        
    },
    box3:{
        marginTop:'-70%',
        marginLeft:'55%',
        width:'40%',
        height:h('5%'),
        backgroundColor:'white',
        borderWidth:2,
        borderColor:'grey',
        borderRadius:20,
        
    },
});

//make this component available to the app
export default Profiles1;
