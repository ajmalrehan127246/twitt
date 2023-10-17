//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StackNavigator } from './src/Navigations/StackNavigation';

// create a component
const APP = () => {
  return (
   <SafeAreaView style={{
    flex:1,
    backgroundColor:'white',
   }}>
    <StackNavigator/>

   </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default APP;
