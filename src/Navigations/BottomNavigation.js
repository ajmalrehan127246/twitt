//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homes from '../Screens/Home';
import Searchs from '../Screens/Search';
import Notifications from '../Screens/Notification';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import  Icon1  from 'react-native-vector-icons/AntDesign';
import  Icon2  from 'react-native-vector-icons/Entypo';

const Tab=createBottomTabNavigator();

// create a component
export function Tabs() {
    return (
        <View style={{flex:1}}>
            <Tab.Navigator
             initialRouteName="Logins"
             screenOptions={{
               headerShown: false,
               tabBarStyle: {
                 backgroundColor: 'white',
                 height: 65,
               
                 paddingBottom: 8,
                 borderTopWidth:1,
                 borderColor:'grey',
                //  borderRadius:20,

                 borderTopColor: 'grey',
                 elevation: 0,
                 shadowColor: '#5bc4ff',
                 shadowOpacity: 0,
                 shadowOffset: {
                   height: 0,
                 },
                 shadowRadius: 0,
                
                 // paddingVertical:10
               },
               
             }}>
                <Tab.Screen
             name="Home"
              component={Homes}
              
             options={{
               headerShown: false,
               tabBarLabel: 'Home',
               tabBarInactiveTintColor: '#808080',
               tabBarActiveTintColor: '#394F2A',
               
               tabBarIcon: ({color, size, focused}) => (
                 <View
                   style={{
                     borderTopWidth: focused ? 2 : 0,
                     borderColor: focused ? '#394F2A' :'blue',
                    //  width: '10%',
                     alignItems: 'center', 
                     borderTopLeftRadius: 3,
                     borderTopRightRadius: 3,
                        
                   
                   }}>
                   {/* <Image
                     source={require('../Assets/home.png')}
                     style={{
                       width: 25,
                       height: 25,
                       resizeMode: 'contain',
                       tintColor: focused ? 'red' : 'red',
                     }}
                   /> */}
                     <Icon name={'home'} size={25} color={color} />
                 </View>
                
                   
               ),
             }}/>
             <Tab.Screen
             name="Search"
             
             component={Searchs}
             options={{
               headerShown: false,
               tabBarLabel: 'Search',
               tabBarInactiveTintColor: '#808080',
               tabBarActiveTintColor: '#394F2A',
               
               tabBarIcon: ({color, size, focused}) => (
                 <View
                   style={{
                     borderTopWidth: focused ? 2 : 0,
                     borderColor: focused ? '#394F2A' :'blue',
                     // width: '10%',
                     alignItems: 'center',
                     borderTopLeftRadius: 3,
                     borderTopRightRadius: 3,
                   
                   }}>
                   {/* <Image
                     source={require('../Assets/home.png')}
                     style={{
                       width: 25,
                       height: 25,
                       resizeMode: 'contain',
                       tintColor: focused ? 'red' : 'red',
                     }}
                   /> */}
                     <Icon1 name={'search1'} size={25} color={color} />
                 </View>
                
                   
               ),
             }}/>
             <Tab.Screen
             name="Notification"
             
             component={Notifications}
             options={{
               headerShown: false,
               tabBarLabel: 'Abouts',
               tabBarInactiveTintColor: '#808080',
               tabBarActiveTintColor: '#394F2A',
               
               tabBarIcon: ({color, size, focused}) => (
                 <View
                   style={{
                     borderTopWidth: focused ? 2 : 0,
                     borderColor: focused ? '#394F2A' :'blue',
                     // width: '10%',
                     alignItems: 'center',
                     borderTopLeftRadius: 3,
                     borderTopRightRadius: 3,
                   
                   }}>
                   {/* <Image
                     source={require('../Assets/home.png')}
                     style={{
                       width: 25,
                       height: 25,
                       resizeMode: 'contain',
                       tintColor: focused ? 'red' : 'red',
                     }}
                   /> */}
                     <Icon2 name={'notification'} size={25} color={color} />
                 </View>
                
                   
               ),
             }}/>

            </Tab.Navigator>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app

