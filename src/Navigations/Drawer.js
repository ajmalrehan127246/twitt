//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native';
import { Tabs } from './BottomNavigation';
import LeftSettings from '../Screens/LeftSetting';

const Drawer=createDrawerNavigator();
// create a component
export function MyDrawer() {
    return (
        <SafeAreaView style={{
            flex:1,
            backgroundColor:'white'}}>
            <Drawer.Navigator 
            drawerContent={props=><LeftSettings {...props}/>}
            initialRouteName='RightDrawer'>
                <Drawer.Screen
                name='BottomNaigation'
                component={Tabs}
                options={{
                    headerTitle: '',
                    headerShown: false,
                    headerStyle: {
                      backgroundColor: '#31635e',
                    },
                  }}/>

            </Drawer.Navigator>
        </SafeAreaView>
    );
};

