//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as w, heightPercentageToDP as h} from 'react-native-responsive-screen';
import  Icon  from 'react-native-vector-icons/Ionicons';
import  Icon1  from 'react-native-vector-icons/Fontisto';
import  Icon2  from 'react-native-vector-icons/MaterialIcons';
import  Icon3  from 'react-native-vector-icons/Foundation';
import  Icon4  from 'react-native-vector-icons/MaterialCommunityIcons';
import  Icon5  from 'react-native-vector-icons/AntDesign';

// create a component
const Setting = () => {
    return (
        <View style={styles.container}>
             <View style={{flexDirection:'row',marginTop:'5%'}}>
            <Icon style={{marginLeft:'5%',marginTop:'10%'}} name='person-outline' size={30} color={'#394F2A'}/>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginLeft:'3%',marginTop:'5%',fontSize:20,fontWeight:'bold',color:'black'}}>Your account</Text>
            
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>See information about your account, download</Text>
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>an archive of your data, or learn about your</Text>
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>account deactivation options .</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Icon1 style={{marginLeft:'5%',marginTop:'10%'}} name='locked' size={25} color={'#394F2A'}/>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginLeft:'3%',marginTop:'5%',fontSize:20,fontWeight:'bold',color:'black'}}>Security and account access</Text>
            
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>Manage your account’s security and keep track</Text>
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>of your account’s usage including apps that</Text>
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>you have connected to your account.</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Icon2 style={{marginLeft:'5%',marginTop:'10%'}} name='privacy-tip' size={27} color={'#394F2A'}/>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginLeft:'3%',marginTop:'5%',fontSize:20,fontWeight:'bold',color:'black'}}>Privacy and safety</Text>
            
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>Manage what information you see and share</Text>
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>on Twitter.</Text>

            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Icon style={{marginLeft:'5%',marginTop:'10%'}} name='notifications-outline' size={30} color={'#394F2A'}/>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginLeft:'3%',marginTop:'5%',fontSize:20,fontWeight:'bold',color:'black'}}>Notifications</Text>
            
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>Select the kinds of notifications you  get about </Text>
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>your activities, interests and recommendations.</Text>

            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Icon3 style={{marginLeft:'5%',marginTop:'10%'}} name='universal-access' size={35} color={'#394F2A'}/>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginLeft:'3%',marginTop:'5%',fontSize:20,fontWeight:'bold',color:'black'}}>Accessibility display and languages</Text>
            
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>Manage how Twitter content is displayed</Text>
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>to you .</Text>

            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Icon4 style={{marginLeft:'5%',marginTop:'10%'}} name='dots-horizontal-circle-outline' size={30} color={'#394F2A'}/>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginLeft:'3%',marginTop:'5%',fontSize:20,fontWeight:'bold',color:'black'}}>Additional resources</Text>
            
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}>Check out other places for helpful information</Text>
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}> to learn more about Twitter products and</Text>
            <Text style={{marginLeft:'4%',fontSize:15,fontWeight:'bold'}}> services.</Text>
            </View>
          </View>


          <View style={{flexDirection:'row'}}>
            <Icon5 style={{marginLeft:'5%',marginTop:'8%'}} name='eyeo' size={25} color={'#394F2A'}/>
            <View style={{flexDirection:'column'}}>
            <Text style={{marginLeft:'15%',marginTop:'25%',fontSize:20,fontWeight:'bold',color:'black'}}>Proxy</Text>
            
        
            </View>
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
export default Setting;
